<html>
    <head>
        <title>CD Choir</title>
        <link rel="stylesheet" href="css/main.css" crossorigin="anonymous">
        <link rel="stylesheet" href="css/sparkle.css" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
        <script src="js/sparkle.js"></script>

        <script>
            window.onload = async function () {
                sparkle ();
                $('main').animate({ opacity: 1 }, 2000); // Fading in HTML content
                $('.webgl').animate({ opacity: 0}, 2000);
            };
        </script>
    </head>

    <body>
        <canvas class="webgl"></canvas>
        <div id="starshine"><div class="template shine"></div></div>
        <main>
            <h1>This is HTML</h1>
        </main>
    </body>
</html>
