const menu = [
    {
      id: 1,
      kategori: "makanan",
      nama: "Japlak Paket 1",
      Harga: 16000,
      gambar: "japlak-1",
    },
    {
      id: 2,
      kategori: "makanan",
      nama: "Japlak Paket 2",
      Harga: 16000,
      gambar: "japlak-2",
    },
    {
      id: 3,
      kategori: "makanan",
      nama: "Japlak Paket 3",
      Harga: 16000,
      gambar: "japlak-3",
    },
    {
      id: 4,
      kategori: "makanan",
      nama: "Japlak Paket 4",
      Harga: 16000,
      gambar: "japlak-4",
    },
    {
      id: 5,
      kategori: "makanan",
      nama: "Japlak Paket 5",
      Harga: 16000,
      gambar: "japlak-5",
    },
    {
      id: 6,
      kategori: "makanan",
      nama: "Japlak Paket 6",
      Harga: 16000,
      gambar: "japlak-6",
    },
    {
      id: 7,
      kategori: "makanan",
      nama: "Japlak Paket 7",
      Harga: 16000,
      gambar: "japlak-7",
    },
    {
      id: 8,
      kategori: "makanan",
      nama: "Japlak Paket 8",
      Harga: 16000,
      gambar: "japlak-8",
    },
    {
      id: 9,
      kategori: "minuman",
      nama: "Jus Mangga",
      Harga: 16000,
      gambar: "mangga",
    },
    {
      id: 10,
      kategori: "minuman",
      nama: "Jus Alpukat",
      Harga: 16000,
      gambar: "alpukat",
    },
    {
      id: 11,
      kategori: "minuman",
      nama: "Jus Jeruk",
      Harga: 16000,
      gambar: "jeruk",
    },
    {
      id: 12,
      kategori: "minuman",
      nama: "Jus naga",
      Harga: 16000,
      gambar: "naga",
    },
    {
      id: 13,
      kategori: "minuman",
      nama: "Jus Stobery",
      Harga: 16000,
      gambar: "Stobery",
    },
    {
      id: 14,
      kategori: "minuman",
      nama: "Es Teh",
      Harga: 16000,
      gambar: "teh",
    },
  ];
  

// function tampilMenu() {
   
// }

// tampilMenu()

function kategoriList(menus){
    var selVal = menus.value;
    if(selVal=== "all"){
        menu.map((val,index)=>{
            let tagMenu = `
            <div class="menu-data-list">
            <div class="menu-gambar">
              <img src="assets/${val.kategori}/${val.gambar}.jpg" alt="">
            </div>
            <div class="menu-title">
              <h2>${val.nama}</h2>
              <p>Rp. ${val.Harga}</p>
              <button class="btn-tambah">Tambah Menu</button>
            </div>
          </div>
            `
            document.querySelector('.menu-data').insertAdjacentHTML("afterbegin",tagMenu)
        })
    }else if(selVal === "makanan"){
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].kategori === "makanan") {
                let tagMenu = `
            <div class="menu-data-list">
            <div class="menu-gambar">
              <img src="assets/${menu[i].kategori}/${menu[i].gambar}.jpg" alt="">
            </div>
            <div class="menu-title">
              <h2>${menu[i].nama}</h2>
              <p>Rp. ${menu[i].Harga}</p>
              <button class="btn-tambah">Tambah Menu</button>
            </div>
          </div>
            `
            document.querySelector('.menu-data').insertAdjacentHTML("afterbegin",tagMenu)
            }
        }
    }
}
