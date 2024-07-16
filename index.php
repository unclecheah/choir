<html>
    <head>
        <title>CD Choir</title>
        <link rel="stylesheet" href="css/main.css" crossorigin="anonymous">
        <link rel="stylesheet" href="css/sparkle.css" crossorigin="anonymous">
        <link rel="stylesheet" href="css/login.css" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">

        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
        <script src="js/sparkle.js"></script>
        <script src="js/login.js"></script>

        <script>
            window.onload = async function () {
                sparkle ();
                login ();
                $('main').animate({ opacity: 1 }, 1000); // Fading in HTML content
                $('.webgl').animate({ opacity: 0}, 1000);
            };
        </script>
    </head>

    <body>
        <canvas class="webgl"></canvas>
        <main>
            <!-- <div id="login"></div> -->
            <h1>This is HTML</h1>
        </main>
    </body>
</html>
