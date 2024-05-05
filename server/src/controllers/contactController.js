import Contact from '../models/Contact.js';

export const contactUser = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    const contactForm = await Contact.create({ email, subject, message });

    res.status(200).json({
      message: 'Your message has been sent successfully!',
      data: contactForm,
    });
  } catch (error) {
    next(error);
  }
};
