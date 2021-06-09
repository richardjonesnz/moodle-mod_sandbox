// https://docs.moodle.org/dev/Templates#How_do_I_call_a_template_from_javascript.3F
import Templates from 'core/templates';
import Notification from 'core/notification';

export const render_content = () => {

    const context = { name: 'Tweety bird', intelligence: 2 };
    const button = document.getElementById('renderbtn');

    button.addEventListener('click', renderContent);

    function renderContent() {
        Templates.render('mod_sandbox/renderme', context)
            .then(function(html, js) {
                Templates.appendNodeContents('.mod_sandbox_rendered', html, js);
            })
            .catch(function(ex) {
                Notification.exception(ex);
            });
    }
};