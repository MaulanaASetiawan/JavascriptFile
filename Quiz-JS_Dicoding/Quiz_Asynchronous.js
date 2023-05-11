/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */
const util = require("util");

function getProvinces(countryId, callback) {

  setTimeout(() => {
    if (countryId === "id") {
      callback(null, [
        { id: "id-jk", name: "Jakarta" },
        { id: "id-bt", name: "Banten" },
        { id: "id-jr", name: "Jawa Barat" },
      ]);
    }
    callback(new Error("Country not found"), null);
  }, 1000);
  return;
}

const getProvincesPromise = util.promisify(getProvinces);

getProvincesPromise("id")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

module.exports = { getProvinces: getProvincesPromise};