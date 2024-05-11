const train = [
    { id: 1, name: 'Kereta Api Indonesia', departure: 'Jakarta' , destination: 'Malang' , price : 200000 , departureTime: '08:00' },
    { id: 2, name: 'Kereta Api Indonesia', departure: 'Cikarang' , destination: 'Solo' , price : 250000 , departureTime: '07:00' },
    { id: 3, name: 'Kereta Api Indonesia', departure: 'Bandung' , destination: 'kudus' , price : 270000 , departureTime: '09:00' },
    { id: 4, name: 'Kereta Api Indonesia', departure: 'Bekasi' , destination: 'Purworejo' , price : 260000 , departureTime: '10:00' },
    { id: 5, name: 'Kereta Api Indonesia', departure: 'Purwakarta' , destination: 'Tegal' , price : 350000 , departureTime: '12:00' },
    { id: 6, name: 'Kereta Api Indonesia', departure: 'Ciamis' , destination: 'Pemalang' , price : 300000 , departureTime: '01:00' },
   
];

function loadTrain(trainToShow) {
    const trainName = document.getElementById('trainName');
    trainName.innerHTML = ''; 

    trainToShow.map(train => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td>${train.id}</td>
            <td>${train.name}</td>
            <td>${train.departure}</td>
            <td>${train.destination}</td>
            <td>${train.price}</td>
            <td>${train.departureTime}</td>
        `;
        trainName.appendChild(listItem);
    });
}
function searchTrain() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredTrain = train.filter(train => {
        return (
            train.name.toLowerCase().includes(searchInput) ||
            train.departure.toLowerCase().includes(searchInput) ||
            train.destination.toLowerCase().includes(searchInput) ||
            train.price.toString().includes(searchInput) ||
            train.departureTime.toString().includes(searchInput)
        );
    });
    loadTrain(filteredTrain);
}

function pesanTiket() {
    const trainName = document.getElementById('trainName').getElementsByTagName('tr');
    const lastSearchedTrain = trainName[trainName.length - 1];
    const namaKereta = lastSearchedTrain.getElementsByTagName('td')[1].textContent;
    const keberangkatan = lastSearchedTrain.getElementsByTagName('td')[2].textContent;
    const tujuan = lastSearchedTrain.getElementsByTagName('td')[3].textContent;
    const hargaTiket = lastSearchedTrain.getElementsByTagName('td')[4].textContent;

    const confirmationMessage = `
        Detail Pemesanan:
        Nama Kereta: ${namaKereta}
        Keberangkatan: ${keberangkatan}
        Tujuan: ${tujuan}
        Harga Tiket: ${hargaTiket}
    `;
    if (confirm(confirmationMessage)) {
        alert("Tiket berhasil dipesan!");
    }
}

window.onload = () => loadTrain(train);
