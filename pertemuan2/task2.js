/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log(`Download completed: ${result}`);
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = (callback) => {
    const result = "file.iso";

    setTimeout(() => {
        callback(result);
      }, 2000);
}

// Refactored Promises
// const downloadPromised = () => {
//     return new Promise((resolve) => {
//       download(resolve);
//     });
//   };
  
//   downloadPromised().then(showDownload);



// Refactored async/await
const downloadWithAwait = async () => {
    const result = await new Promise((resolve) => {
      download(resolve);
    });
    showDownload(result);
  };

  download(showDownload);
/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
