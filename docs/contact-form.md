# Contact form — re-enabling checklist

The contact section is hidden for now because no email sending service is set up. The code stays in the repo so it can come back:

- `src/sections/Contact.tsx` — section wrapper
- `src/forms/ContactForm.tsx` — form, EmailJS call and result dialog

It is removed from the page in `src/App.tsx` (look for the "Contact is hidden" comment).

## 1. Set up the email service

- [ ] Pick a service. The form is built for [EmailJS](https://www.emailjs.com/) (sends straight from the browser, no backend). Anything else needs `sendEmail` in `ContactForm.tsx` rewritten.
- [ ] Create the email service and a template that uses the form's field names: `from_name`, `from_email`, `message`. Set the template's Reply-To to `{{from_email}}`.
- [ ] Lock it down in the EmailJS dashboard:
  - [ ] restrict allowed origins to `sha.codes` (and localhost for dev)
  - [ ] turn on rate limiting
  - [ ] optionally enable reCAPTCHA
- [ ] Note: the EmailJS public key is designed to ship in browser code. Env vars keep config out of source but do not hide it; the dashboard restrictions above are what stop abuse.

## 2. Update the code

- [ ] Replace the deprecated `emailjs-com` package with `@emailjs/browser` and update the import/API in `ContactForm.tsx`.
- [ ] Replace the hardcoded service ID, template ID and key (`ContactForm.tsx`, `sendForm(...)` call) with env vars. Under CRA these are `REACT_APP_*`; after the Vite migration in `modernization-plan.md` they become `VITE_*`. Add a `.env.example` and gitignore `.env`.
- [ ] Add `<Contact />` (and its `lazy` import) back to `src/App.tsx`.

## 3. Fix the known form bugs before shipping

Found in the 2026-10-19 code review:

- [ ] **Dialog can't be closed on phones.** The close button is `hidden sm:block` and there is no `DialogPanel`, so tapping outside does nothing. Show the close button at all sizes, wrap content in `DialogPanel`, and add an "OK" button.
- [ ] **Dialog colours don't exist.** `bg-gray-500`, `to-gray-900` and `text-gray-*` generate no CSS because `tailwind.config.js` replaces the default palette. Use `grey`/`greyish` tokens (e.g. `bg-grey-900/75`, `to-grey-900`, `text-greyish-200`). Without this there is no backdrop and the dialog is see-through.
- [ ] **Error state shows a success tick.** Both branches of the icon use the same checkmark path. Use an "x" or "!" icon for errors.
- [ ] **No sending state.** Disable the submit button while sending to prevent double sends.
- [ ] **Form isn't reset after success.** Call `formRef.current.reset()`.
- [ ] **Message limit is 255 characters.** Raise it (around 2,000) and show a counter.
- [ ] **Spam.** Add a hidden honeypot field and ignore submissions that fill it.

## 4. Test

- [ ] Send a real message locally and check it arrives with the right Reply-To.
- [ ] Force a failure (e.g. a bad template ID) and check the error dialog and fallback email text.
- [ ] On a phone (or mobile emulation): open and close both dialogs by the close button, the OK button and tapping outside.
- [ ] Keyboard only: tab through the fields, submit, and close the dialog with Escape.
