import Root from 'core/config';
import Log from 'core/log';
import * as Str from 'core/str';

export const get_root = () => {
    Log.info('You are at: ' + Root.wwwroot);
    const output = document.getElementById('mod_sandbox_output');
    Str.get_string('whereami', 'mod_sandbox').done(
        function(thestring) {
            output.innerHTML = thestring + Root.wwwroot;
    });
};