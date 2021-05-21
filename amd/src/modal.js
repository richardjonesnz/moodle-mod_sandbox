import ModalFactory from 'core/modal_factory';
import Log from 'core/log';

export const show_modal = () => {
    ModalFactory.create({
        title: 'Clear content',
        body: '<p>Content cleared.</p>'
      })
      .then(function(modal) {
          const trigger = document.getElementById('mdlbtn');
          const output = document.getElementById('mod_sandbox_output');
          trigger.onclick = function() {
              Log.info(modal);
              Log.info(trigger);
              output.innerHTML = '';
              modal.show();
          };
      })
      .done(function(modal) {
          modal.close();
    });
};