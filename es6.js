// json = object/array/keduanya

// object data diri
const mahasiswa = {
    nama: "tara",
    nim: "A11.2023.15471",
    umur: 18,
    status: true,
    hobby: ["catur", "mancing", "tidur"],
    matkul: [
        {
            matkulid: 4301,
            matkulNama: "pemsik",
            sks: 3,
            nilai: 85
        },
        {
            matkulid: 4604,
            matkulNama: "daspro",
            sks: 4,
            nilai: 79
        }

    ]
}

console.log(mahasiswa);

// ES6 - Destructuring object
// const nama = mahasiswa.nama; // cara lama
// const nim = mahasiswa.nim;  // cara lama

const { nama, nim, status, hobby, matkul } = mahasiswa; // cara baru
console.log("Nama Saya: " + nama + ' - ' + nim);

// ES6 - Destructuring Array
const [ hobi1, hobi2 ] = hobby;
console.log("Hobby sumber cuanku: " + hobi1 + " dan " + hobi2);

// ES5 - Template literal
console.log(`Hobby sumber cuanku ${hobi1} dan ${hobi2}`);

// ES5 - Spread Operator
const newHobby = "judi";

const updateHobby = [ ...hobby, newHobby, "ngeslot" ]; // add to array
console.log(`Menginfo hobby 2025: ${updateHobby}`);

// ES6 - Function
// cara lama
function sum(a,b){
    return a+b;
}
// cara baru
const jumlah = (a,b) => a+b;

console.log(`berhitung yukl 1 + 2 = ${jumlah(1,2)}`);

// ES6 - logical => ?:, ||
const statusMhs = status ? "Aktif" : "Non-Ak"
console.log(`Statusku ${statusMhs}`);

const aktifMhs = mahasiswa.organisasi || "Mboten";
console.log(`Keikutsertaan Organisasi: ${aktifMhs}`);

// ES6 - Array Method (map, filter, reduce)
const namaMatkul = matkul.map((m) => m.matkulNama);

console.log(namaMatkul);

const listMhs = [
    {nim: '2012', nama: 'tara', status: true},
    {nim: '2014', nama: 'taro', status: true},
    {nim: '2013', nama: 'icikiwir', status: false},
]

const mhsValid = listMhs.filter((m) => m.status);
console.log(mhsValid);

const totalSks = matkul.reduce((total, m) => total + m.sks, 0);
console.log(totalSks);