function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    
    switch (programId) {
        case 'ACC' :
            programId = 'Akuntansi'
            break;
        case 'HIN' :
            programId = 'Hubungan Internasional' 
            break;
        case 'IAB' :
            programId = 'Ilmu Administrasi Bisnis' 
            break;
        case 'IAP' :
            programId = 'Ilmu Administrasi Publik' 
            break;
        case 'MJN' :
            programId = 'Manajemen' 
            break;
        case 'TKM' :
            programId = 'Teknik Kimia' 
            break;
        default:
            return
            break;
    }

    if (isNaN(gpa) || gpa <0 || gpa >4){
        return `Invalid gpa number`;
    }
    if (gpa >= 3 &&  gpa <= 4){
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak 24 SKS untuk semester depan.`;
    }else if (gpa >= 2.5 && gpa < 3) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.`;
    }else if (gpa >= 2 && gpa < 2.5) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.`;
    }else if (gpa >= 1.5 && gpa < 2){
        return  `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.`;
    }else if (gpa >= 0 && gpa < 1.5){
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.`;
    }

    
    
  }


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
