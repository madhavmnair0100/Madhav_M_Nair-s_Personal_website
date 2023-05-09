<div style="margin-top: 115px;" class="d-flex justify-content-center">
    <img style="width: 290px;"
        src="https://png2.cleanpng.com/sh/4aeba6b4d6ba8be8ec686c2e22a14e50/L0KzQYm3U8E2N5lofZH0aYP2gLBuTfdwd5hxkZ9ueXX2PbTokwRwd58ye95ycD3kgsW0gBFzfJD0hp95aXP3hcPsk71wbl5qkdd8LUXkcbK6gfRjbmQASag9Lki0SIq8VsEzOWY3SaM5NUa1R4qCV8cveJ9s/kisspng-googly-eyes-cartoon-clip-art-cartoon-pictures-of-eyes-5aaa3adbf39164.8189561215211056279977.png">
    <div class="spinner-border" style=" position: absolute; --bs-spinner-width: 20rem; --bs-spinner-height: 20rem;"
        role="status">
        <img style="width: 100px;"
            src="https://banner2.cleanpng.com/20180328/ffw/kisspng-emoji-smiley-happiness-iphone-emoticon-emoji-5abb33c395c6d8.7618577315222179236135.jpg">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
<h1 style="margin-left: 600px; margin-top: 70px;" class="loading">Loading...</h1>
<script>

    const randomMilliseconds = Math.random() < 0.2 ? Math.floor(Math.random() * 5000) : Math.floor(Math.random() * 10001) + 5000;


    setTimeout(function () {
        // after 5 seconds, change the location to the HTML file you want to display
        window.location.href = "home";
    }, randomMilliseconds )

    //console.log(Math.floor(Math.random() * 11))

    // Get a reference to the loading element
    const loadingEl = document.querySelector('.loading');

    // Set an interval to update the loading text every 500 milliseconds
    let counter = 0;
    const interval = setInterval(() => {
        // Update the text based on the counter
        switch (counter % 3) {
            case 0:
                loadingEl.textContent = 'loading.';
                break;
            case 1:
                loadingEl.textContent = 'loading..';
                break;
            case 2:
                loadingEl.textContent = 'loading...';
                break;
        }
        // Increment the counter
        counter++;
    }, 300);

    // When the loading is complete, clear the interval and hide the loading element
    function loadingComplete() {
        clearInterval(interval);
        loadingEl.style.display = 'none';
    }

</script>
