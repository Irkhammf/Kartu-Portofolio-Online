const TeksElemen = ['Irkham Muhammad Fakhri', 'mahasiswa', 'gamer', 'blogger', 'analis', 'pengamat teknologi'];
let count = 0;
let TeksIndek = 0;
let TeksSekarang = '';
let word = '';

(function ketikan(){
    if(count == TeksElemen.length){
        count = 0;
    }
    TeksSekarang = TeksElemen[count];
    word = TeksSekarang.slice(0, TeksIndek++);
    document.querySelector('.efek-ketikan').textContent = word;

    if (word.length == TeksSekarang.length){
        count++;
        TeksIndek = 0;
    }
    setTimeout(ketikan, 300);
})();