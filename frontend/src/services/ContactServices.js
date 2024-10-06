export const makePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
};

export const sendEmail = (email) => {
    window.location.href = `mailto:${email}`;
};