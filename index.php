<html>
    <head>
        <title>CD Choir</title>
        <link rel="stylesheet" href="css/main.css" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

        <script>
            window.onload = async function () {
                $('main').css('opacity', 0); // Set initial opacity of main to 0
                $('main').animate({ opacity: 1 }, 2000); // Fading in HTML content
                $('.webgl').animate({ opacity: 0}, 2000);
            };
        </script>
    </head>

    <body>
        <canvas class="webgl"></canvas>

        <main>
            <h1>This is HTML</h1>
        </main>
    </body>
</html>
