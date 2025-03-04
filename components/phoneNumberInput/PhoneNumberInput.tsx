import { useState } from "react";
import { Country } from "../../types/common";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

type PhoneNumberInputProps = {
  label?: string;
  selectedCountry: Country;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country>>;
  countries: Country[];
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name: string;
  required?: boolean;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  selectedCountry,
  setSelectedCountry,
  name,
  register,
  countries,
  error,
  required = false,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={name} className="mb-1 text-sm font-medium text-black">
          {label}{required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex items-start space-x-4">
        <div className="relative flex-shrink-0 w-32">
          <div
            className="flex items-center justify-between space-x-2 py-2.5 cursor-pointer ring-typography-secondary/30 border border-black rounded-[8px] ring-1 px-2 text-sm focus:outline-none focus:border-none focus:ring-2 focus:ring-primary  "
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center space-x-2 ">
              <Image
                alt={`Flag of ${selectedCountry.code}`}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry.code}.svg`}
                className="w-6 h-4"
                width={24}
                height={16}
              />
              <span className="text-typography-secondary/30">
                {selectedCountry.dialingCode}
              </span>
            </div>
            <FaChevronDown
              aria-hidden="true"
              className="pointer-events-none size-5 self-center justify-self-end text-typography-secondary/30 sm:size-4"
            />
          </div>
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 mt-1 bg-secondary rounded z-10 overflow-auto h-36 shadow-lg ring-1 ring-black ring-opacity-5">
              {countries.map((country) => (
                <div
                  key={country.code}
                  onClick={() => handleCountryChange(country)}
                  className="flex items-center space-x-2 px-3 py-2 cursor-pointer hover:bg-light-secondary"
                >
                  <Image
                    alt={`Flag of ${country.code}`}
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                    className="w-6 h-4"
                    width={24}
                    height={16}
                  />
                  <span className="text-typography-secondary/30">
                    {country.dialingCode}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-grow ">
          <input
            {...register(name)}
            name={name}
            id={name}
            placeholder="Enter phone number"
            className={`px-4 py-2 border rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-primary w-full ${
              error ? "border-red-500 " : "border-black"
            }`}
          />
          {error && (
            <p className="mt-1 text-sm text-red-500 text-left">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberInput;
