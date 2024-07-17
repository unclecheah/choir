/*
<div class="modal fade" id="${modalLoginFormID}" tabindex="-1" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <div class="text-center border rounded-3" style="max-width:480px;margin:auto;padding:15px">
                    <img class="my-4" src="img/uc-marble.png" height="72" alt="logo">
                    <h1 class="h3 mb-3 font-weight-normal">Login</h1>
                    <div class="mt-3 d-grid">
                        <input id="${modalLoginUserID}" name="username" placeholder="Username" pattern="[a-zA-Z0-9]+" class="form-control" value="ctk" />
                    </div>
                    <div class="mt-2 d-grid">
                        <input type="password" id="${modalLoginPwID}" name="pass" placeholder="Password" class="form-control" autofocus />
                    </div>
                    <div id="${modalLoginErrID}" class="p-1 mt-2 bg-danger text-white invisible">Error</div>
                    <div class="mt-3 d-grid">
                        <button class="btn btn-md btn-primary" name="login" onclick="authenticate()">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
*/

function login () {
    var div = `
        <div id='login'>
            <img src='img/uc-marble.png' height='72' width='72' alt='logo'>
            <h1>Login</h1>
            <div class='field'>
                <input type="text" required />
                <div class="placeholder">Username</div>
            </div>
            <div class='field'>
                <input type="password" required />
                <div class="placeholder">Password</div>
            </div>
        </div>
    `;
    $('main').append(div);
}
