#include <iostream>
using namespace std;

int main()
{
    string input,hapus;
    cout << "Masukkan Tulisan> "; getline(cin,input);
    cout << "Hapus Kata> "; getline(cin,hapus);
    input = input.replace(input.find(hapus),hapus.length(),"");
    if (input != input.replace(input.find(hapus),hapus.length(),"")) cout << "Tidak ada kata yang tersisa";
    cout << input;
}