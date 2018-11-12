const $dialog = $("#prompt-dialog");
const $question = $("#prompt-dialog-question");
const $answer = $("#prompt-dialog-answer");
const $form = $("#prompt-dialog-form");

let resolve;

function ask(message, defaultValue = '') {
    glob.activeDialog = $dialog;

    $question.text(message);
    $answer.val(defaultValue);

    $dialog.modal();

    return new Promise((res, rej) => {
        resolve = res;
    });
}

$dialog.on('shown.bs.modal', () => $answer.focus().select());

$dialog.on("hidden.bs.modal", () => {
    if (resolve) {
        resolve(null);
    }
});

$form.submit(() => {
    resolve($answer.val());

    $dialog.modal('hide');
});

export default {
    ask
}