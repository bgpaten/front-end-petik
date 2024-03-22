function download(callbackverify) {
    setTimeout(() => {
        console.log("Download selama 3 detik");
        callbackverify();
    }, 3000);
}

function verify(callbacknotify) {
    setTimeout(() => {
        console.log("Verify selama 2 detik");
        callbacknotify();
    }, 2000)
}

function notify() {
    console.log("Download Selesai");
}

function main() {
    //  solusinya menggunakan callback
    download(function() {
        verify(function() {
            notify();
        });
    });
}

main();