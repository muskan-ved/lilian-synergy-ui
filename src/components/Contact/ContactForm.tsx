/**
 * The `ContactForm` component is a React functional component that renders a contact form for users to submit their information.
 *
 * The form includes fields for the user's name, email, phone number, budget, type of service, objective, and message. The form also includes a checkbox for the user to agree to the website's terms of use and privacy policy.
 *
 * The component uses the `react-hook-form` library to manage the form state and validation, and the `yupResolver` from `@hookform/resolvers/yup` to validate the form data using the `contactValidations` schema.
 *
 * The component also uses the `useScrollAnimation` hook to animate the form fields as the user scrolls down the page.
 *
 * When the user submits the form, the `onSubmit` function is called, which sends the form data to the `contactUsAPI` endpoint using the `postFetch` function from `@/utils/apiMethods`. If the form is submitted successfully, a success message is displayed using the `react-toastify` library. If there is an error, an error message is displayed.
 */
import { ContactInfo, Social } from "@/types/contact.type";
import React, { useState } from "react";
import styles from "@/styles/contact.module.css";
import Button from "../Common/Button";
import { URL } from "@/config/webConfig";
import { postFetch } from "@/utils/apiMethods";
import { motion } from "framer-motion";
import ContactInfoComp from "./ContactInfo";
import { useForm, SubmitHandler } from "react-hook-form";
import ShowError from "@/utils/showError";
import { contactValidations } from "@/validations/contactValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BudgetOption,
  ObjectiveOption,
  serviceOption,
} from "@/utils/staticData";
import { toast } from "react-toastify";
import { useScrollAnimation } from "../Common/useScrollAnimation";
import Dropdown from "../Common/Dropdown";
import Link from "next/link";

// import { useTranslation } from "react-i18next";

interface ContactFormProps {
  social: Social;
  contactInfo: ContactInfo;
}
interface IFormInput {
  name: string;
  email: string;
  phone: string;
  budget: string;
  typeOfService: string;
  objective: string;
  message: string;
  terms?: boolean;
}
const ContactForm: React.FC<ContactFormProps> = ({ social, contactInfo }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(contactValidations),
    mode: "onChange",
  });
  const { ref: formRef, inView: formInView } = useScrollAnimation();
  const { ref: nameEmailRef, inView: nameEmailInView } = useScrollAnimation();
  const { ref: phoneBudgetRef, inView: phoneBudgetInView } =
    useScrollAnimation();
  const { ref: serviceRef, inView: serviceInView } = useScrollAnimation();
  const { ref: messageRef, inView: messageInView } = useScrollAnimation();
  const { ref: termsRef, inView: termsInView } = useScrollAnimation();
  const { ref: buttonRef, inView: buttonInView } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSelected, setResetSelected] = useState('');

  // const { t } = useTranslation("common");

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    try {
      setIsSubmitting(true);
      const formattedData = { data: formData };
      await postFetch(URL.contactUsAPI, formattedData);
      toast.success("Form submitted successfully!", {
        position: "bottom-right",
      });
      reset();
      setResetSelected("- choose -");

    } catch (error) {
      toast.error("An error occurred while submitting the form.", {
        position: "bottom-right",
      });
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelect = (selected: string, field: keyof IFormInput) => {
    setValue(field, selected, { shouldValidate: true });
  };

  return (
    <motion.div
    ref={formRef}
    className={styles.form_content}
    initial={{ y: 50, opacity: 0 }}
    animate={formInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <ContactInfoComp social={social} contactInfo={contactInfo} />
    <motion.div
      className={styles.form_container}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
    >
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <motion.div
          className={styles.field_container}
          ref={nameEmailRef}
          initial={{ y: 20, opacity: 0 }}
          animate={
            nameEmailInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.form_group}>
            <motion.label
              htmlFor="name"
              className={styles.input_label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              Name
            </motion.label>
            <div>
              <motion.input
                className={`${styles.input_field} ${styles.no_focus}`}
                type="text"
                id="name"
                {...register("name")}
                placeholder="Name here"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.8 }}
              />
              {errors && errors.name ? ShowError(errors?.name?.message) : ""}
            </div>
          </div>
          <div className={styles.form_group}>
            <motion.label
              htmlFor="email"
              className={styles.input_label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              Email address
            </motion.label>
            <div>
              <motion.input
                className={`${styles.input_field} ${styles.no_focus}`}
                type="text"
                id="email"
                {...register("email")}
                placeholder="Email address"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.8 }}
              />
              {errors && errors.email
                ? ShowError(errors?.email?.message)
                : ""}
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={phoneBudgetRef}
          className={styles.field_container}
          initial={{ y: 20, opacity: 0 }}
          animate={
            phoneBudgetInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.form_group}>
            <motion.label
              htmlFor="phone"
              className={styles.input_label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              Phone number
            </motion.label>
            <div>
              <motion.input
                className={`${styles.input_field} ${styles.no_focus}`}
                type="text"
                id="phone"
                {...register("phone")}
                placeholder="Phone number"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.8 }}
              />
              {errors && errors.phone
                ? ShowError(errors?.phone?.message)
                : ""}
            </div>
          </div>

          <div className={styles.form_group}>
            <motion.label
              htmlFor="budget"
              className={styles.input_label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              Budget
            </motion.label>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
            >
              <Dropdown
                options={BudgetOption}
                label="- choose -"
                resetSelected={resetSelected}
                onSelect={(selected) => handleSelect(selected, "budget")}
              />
              {errors && errors.budget
                ? ShowError(errors?.budget?.message)
                : ""}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={serviceRef}
          className={styles.field_container}
          initial={{ y: 20, opacity: 0 }}
          animate={
            serviceInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.form_group}>
            <motion.label
              htmlFor="typeOfService"
              className={styles.input_label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              Type of Service
            </motion.label>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
            >
              <Dropdown
                options={serviceOption}
                label="- choose -"
                resetSelected={resetSelected}
                onSelect={(selected) =>
                  handleSelect(selected, "typeOfService")
                }
              />

              {errors && errors.typeOfService
                ? ShowError(errors?.typeOfService?.message)
                : ""}
            </motion.div>
          </div>
          <div className={styles.form_group}>
            <motion.label
              htmlFor="objective"
              className={styles.input_label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              Objective
            </motion.label>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
            >
              <Dropdown
                options={ObjectiveOption}
                label="- choose -"
                resetSelected={resetSelected}
                onSelect={(selected) => handleSelect(selected, "objective")}
              />

              {errors && errors.objective
                ? ShowError(errors?.objective?.message)
                : ""}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={messageRef}
          className={styles.textarea_container}
          initial={{ y: 20, opacity: 0 }}
          animate={
            messageInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.label
            htmlFor="message"
            className={styles.textarea_input_label1}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          >
            Do you have a specific question or require more details?
          </motion.label>
          <motion.label
            htmlFor="message"
            className={styles.textarea_input_label2}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          >
            Use the form below to send us a message, and a member of our team
            will get back to you as soon as possible.
          </motion.label>

          <div>
            <motion.textarea
              id="message"
              {...register("message")}
              placeholder="Send Us a Message..."
              className={`${styles.textarea_field} ${styles.no_focus}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
            ></motion.textarea>
            {errors && errors.message
              ? ShowError(errors?.message?.message)
              : ""}
          </div>
        </motion.div>

        <motion.div
          ref={termsRef}
          className={styles.checkbox_container}
          initial={{ y: 20, opacity: 0 }}
          animate={termsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.input
            type="checkbox"
            id="terms"
            {...register("terms")}
            className={styles.input_checkbox}
            onChange={(e) =>
              setValue("terms", e.target.checked, { shouldValidate: true })
            }
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          />
          <motion.span
            className={styles.checkmark}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          ></motion.span>
          <motion.span className={styles.checkmark_text}>
            I agree to the collection and use of my personal data in
            accordance with the{" "}
            <Link href="privacypolicy" className="underline">
              PDPA
            </Link>{" "}
            and the website's{" "}
            <Link href="termsofservice" className="underline">
              Terms of Use.
            </Link>
          </motion.span>
        </motion.div>
        {errors && errors.terms ? ShowError(errors?.terms?.message) : ""}

        <motion.div
          ref={buttonRef}
          initial={{ y: 20, opacity: 0 }}
          animate={
            buttonInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.button_container}
        >
          <Button
            type="primaryBtn"
            name="Start a project"
            isLoading={isSubmitting}
          />
        </motion.div>
      </form>
    </motion.div>
  </motion.div>
  );
};
export default ContactForm;
