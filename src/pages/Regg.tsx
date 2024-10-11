"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

// Define the type for Input component props
interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  id: string;
  pattern?: string;
  value: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  onChange,
  required,
  minLength,
  maxLength,
  id,
  pattern,
  value,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="relative bg-white rounded-xl p-4 text-black shadow-md">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (e.target.value === "") {
            setIsFocused(false);
          }
        }}
        id={id}
        className="bg-transparent outline-none border-b pt-4 py-1 text-base border-black w-full"
        autoComplete="off"
        value={value}
      />
      <label
        htmlFor={id}
        className={`absolute transition-all ${
          isFocused
            ? "text-black text-sm top-2 left-4"
            : "text-gray-500 text-base top-7 left-4"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Registerr: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [transaction, setTransaction] = useState<string>("");
  const [referral, setReferral] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDualBooted, setIsDualBooted] = useState<string>(
    "Do you have Linux installed?"
  );

  const validatePhone = (phone: string): boolean => {
    const pattern = /^[5-9]\d{9}$/;
    return pattern.test(phone);
  };

  const showAlert = (icon: "success" | "error", title: string, text: string) => {
    alert(`${title}: ${text}`);
  };

  const isValidInput = (): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (name.length < 1) {
      showAlert("error", "Invalid Name", "Name is required");
      return false;
    }
    if (email.length === 0 || !emailPattern.test(email)) {
      showAlert("error", "Invalid Email", "Email is required");
      return false;
    }
    if (!validatePhone(phone)) {
      showAlert("error", "Invalid Phone Number", "Phone number is invalid");
      return false;
    }
    if (college.length === 0) {
      showAlert("error", "Invalid College", "College name is required");
      return false;
    }
    if (year.length === 0) {
      showAlert("error", "Invalid Year", "Year of study is required");
      return false;
    }
    if (branch.length === 0) {
      showAlert("error", "Invalid Branch", "Branch is required");
      return false;
    }
    if (transaction.length === 0) {
      showAlert(
        "error",
        "Invalid Transaction ID",
        "Transaction ID is required"
      );
      return false;
    }
    if (isDualBooted !== "Yes" && isDualBooted !== "No") {
      showAlert(
        "error",
        "Invalid Input",
        "Please select if you have Linux installed"
      );
      return false;
    }
    return true;
  };

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidInput()) {
      return;
    }
    if (file === null) {
      showAlert("error", "Invalid Input", "Please upload payment screenshot");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("transactionId", transaction);
    formData.append("collegeName", college);
    formData.append("yearOfStudy", year);
    formData.append("branch", branch);
    formData.append("referralCode", referral);
    formData.append("paymentImg", file);

    // Continue with your submission logic
  };

  return (
    <div
      id="register"
      className="px-6 md:px-14 py-24 relative flex items-center justify-center"
    >
      <div className="bg-white/30 shadow-md rounded-lg flex flex-col-reverse md:flex-row md:space-x-4 justify-center items-center z-50 w-full min-h-72">
        <div className="w-full p-6 h-full">
          <h1 className="text-4xl font-[900] text-black hidden md:block">
            Register!
          </h1>
          <p className="my-2 mb-4 text-sm sm:text-base text-black hidden md:block">
            Fill the details below to secure your seat.
          </p>
          <form className="flex flex-col space-y-6 md:p-4" onSubmit={register}>
            <Input
              label="Name"
              type="text"
              required={true}
              minLength={3}
              maxLength={50}
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              label="Email"
              type="email"
              required={true}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              label="Phone"
              type="tel"
              required={true}
              maxLength={10}
              id="phone"
              pattern="[5-9]{1}[0-9]{9}"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Input
              label="College Name"
              type="text"
              required={true}
              id="college"
              onChange={(e) => setCollege(e.target.value)}
              value={college}
            />
            <Input
              label="Year of Study"
              type="text"
              required={true}
              id="year"
              onChange={(e) => setYear(e.target.value)}
              value={year}
            />
            <Input
              label="Branch"
              type="text"
              required={true}
              id="branch"
              onChange={(e) => setBranch(e.target.value)}
              value={branch}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              {isLoading ? "Submitting..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registerr;
