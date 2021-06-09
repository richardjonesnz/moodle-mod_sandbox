import Log from 'core/log';
export const boot_modal = () => {

    // Set up variables.
    const button = document.getElementById('bootbtn');
    const modal = document.getElementById('mod_sandbox_myModal');
    const span = document.getElementsByClassName('mod_sandbox_close')[0];
    const comment = document.getElementsByClassName('mod_sandbox_content')[0].lastElementChild;
    const input = document.getElementById('ex3');

    // Add event listeners.
    button.addEventListener('click', showModal);
    span.addEventListener('click', hideModal);

    // Actions.
    function showModal() {
        modal.style.display = "block";
    }
    function hideModal() {
        Log.info(comment);
        Log.info(input);
        modal.style.display = "none";
        comment.innerHTML = input.value;
    }
};