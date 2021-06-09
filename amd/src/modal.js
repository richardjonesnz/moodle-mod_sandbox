// See: https://docs.moodle.org/dev/Useful_core_Javascript_modules.
import ModalFactory from 'core/modal_factory';
import ModalEvents from 'core/modal_events';
import Log from 'core/log';

// The function called from the Mustache template.
export const show_modal = () => {
    // Set up a SAVE_CANCEL modal.
    ModalFactory.create({
        type: ModalFactory.types.SAVE_CANCEL,
        title: 'Clear content',
        body: '<p>Do you really want to clear the content?</p>'
      })
      // Set up the actions.
      .then(function(modal) {
          // The trigger button for showing the modal.
          const trigger = document.getElementById('mdlbtn');
          // Display element - some sample content.
          const output = document.getElementById('mod_sandbox_output');
          const root = modal.getRoot();
          // Add the event trigger (avoiding .onclick).
          trigger.addEventListener('click', confirm);

          // When button clicked.
          function confirm() {
              // Convenient to use the log for debugging.
              Log.info('Button clicked');
              // If save is selected then go ahead and delete the content.
              root.on(ModalEvents.save, function() {
                  output.innerHTML = '';
              });
              modal.show();
          }
      })
      .then(function(modal) {
          modal.close();
    });
};