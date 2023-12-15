---
title: 'Provide Feedback'
outline: [0, 5]
order: 0
prev: false
next: false
layout: 'doc'
---

# Provide Feedback

Thank you for sharing your valuable feedback with us! Your insights are crucial in helping us enhance our product and better serve your needs.

<form :class="$style.form" id="form" method="POST" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSYFye8Y3HbdQXpdAsP-udMaJ9tJ1wns3n87B2O0uSVapVGw/formResponse" target="hiddenConfirm">
    <label :class="$style.label" for="entry.1231035548">Email*</label>
    <input :class="$style.input" name="entry.1231035548" type="email" required />
    <label :class="$style.label" for="entry.1564755292">Type*</label>
    <div :class="$style.split">
        <input type="radio" name="entry.1564755292" id="entry.1564755292" value="Documentation" />
        <label for="Documentation">Documentation</label>
    </div>
    <div :class="$style.split">
        <input type="radio" name="entry.1564755292" id="entry.1564755292" value="Blockchain" />
        <label for="Blockchain">Blockchain</label>
    </div>
    <div :class="$style.split">
        <input type="radio" name="entry.1564755292" id="entry.1564755292" value="Game Development" />
        <label for="Game Development">Game Development</label>
    </div>
    <div :class="$style.split">
        <input type="radio" name="entry.1564755292" id="entry.1564755292" value="API" />
        <label for="API">API</label>
    </div>
     <div :class="$style.split">
        <input type="radio" name="entry.1564755292" id="entry.1564755292" value="Tutorial" />
        <label for="Tutorial">Tutorial</label>
    </div>
     <div :class="$style.split">
        <input type="radio" name="entry.1564755292" id="entry.1564755292" value="Other" />
        <label for="Other">Other</label>
    </div>
    <label :class="$style.label">Feedback*</label>
    <textarea :class="$style.input" name="entry.289651362" required />
    <sup>* Required</sup>
    <button :class="$style.submit" type="submit">Submit Form</button>
    <sup>Form Provided by Google Forms. <br/><a href="https://forms.gle/hvgdEkaqy9Wzi1Jv6">Use the form directly if you are having issues.</a></sup>
</form>

<style module>
.form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 12px;
}

.split {
    display: flex;
    gap: 12px;
    align-items: center;
}

.input {
    border: 1px solid var(--vp-c-border-color);
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 6px;
    padding-left: 12px;
    padding-right: 12px;
}

.option {
    background: var(--vp-c-bg-alt);
}

.submit {
    background: rgba(0, 0, 0, 0.3);
    color: var(--vp-c-brand);
    font-weight: bold;
    border-radius: 6px;
    padding: 6px;
    max-width: 128px;
    margin-top: 12px;
}

.submit:hover {
     background: rgba(0, 0, 0, 0.5);
}
</style>