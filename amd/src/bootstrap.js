import Log from 'core/log';
export const boot_modal = () => {

    const button = document.getElementById('bootbtn');
    const modal = document.getElementById('mod_sandbox_myModal');
    const span = document.getElementsByClassName('mod_sandbox_close')[0];
    const comment = document.getElementsByClassName('mod_sandbox_content')[0].lastElementChild;
    const input = document.getElementById('ex3');

    button.onclick = function() {
        modal.style.display = "block";
    };
    span.onclick = function() {
        Log.info(comment);
        Log.info(input);
        modal.style.display = "none";
        comment.innerHTML = input.value;
    };
};