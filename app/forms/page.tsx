"use client";
import TypeHabitation from '../components/forms/TypeHabitation';
import FormsLayout from './layout';
import { useEffect, useState } from "react";
import ZipCode from '../components/forms/ZipCode';
import Contact from '../components/forms/Contact';
import FinishStep from '../components/forms/FinishStep';
import Residence from '../components/forms/Residence';
import HeightHabitation from '../components/forms/HeightHabitation';
import Equipment from '../components/forms/Equipment';
import People from '../components/forms/People';
import { motion, AnimatePresence } from "framer-motion";
import Pet from '../components/forms/Pet';
import { PhoneNumber } from 'libphonenumber-js';
import PhoneContact from '../components/forms/PhoneContact';

export default function Home() {
  const [form, setForm] = useState({
    type: "",
    residence: "",
    heightHabitation: "",
    equipment: "",
    people: "",
    pet: "",
    zipCode: "",
    city: "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [step, setStep] = useState<"type" | "residence" | "taille" | "equipement" | "occupants" | "animaux" | "postal" | "contact" | "numéro" | "finish">("type");

  const [count, setCount] = useState<number>(1);
  const [displayCount, _] = useState<number>(10);
  const [progress, setProgress] = useState<number>(Math.floor((count * 100) / displayCount));
  const [direction, setDirection] = useState(1);
  const [initialized, setInitialized] = useState(false);
  const [show, setShow] = useState(false);

  const rollbackStep = () => {
    if (step === "type") {
      window.history.back();
    } else {
      setDirection(-1);
      setCount(count - 1);
      setProgress(Math.floor(((count - 1) * 100) / displayCount));
      if (step === "residence") {
        setStep("type");
      }
      if (step === "taille") {
        setStep("residence");
      }
      if (step === "equipement") {
        setStep("taille");
      }
      if (step === "occupants") {
        setStep("equipement");
      }
      if (step === "animaux") {
        setStep("occupants");
      }
      if (step === "postal") {
        setStep("animaux");
      }
      if (step === "contact") {
        setStep("postal");
      }
      if (step === "numéro") {
        setStep("contact");
      }
    }
  };

  const handleTypeChange = (type: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      type: type
    }));
    setStep("residence");
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const handleResidenceChange = (residence: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      residence: residence
    }));
    setStep("taille");
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const handleHeightHabitationChange = (heightHabitation: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      heightHabitation: heightHabitation
    }));
    setStep("equipement");
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const handleEquipmentChange = (equipment: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      equipment: equipment
    }));
    setStep("occupants");
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const handlePeopletChange = async (people: string) => {
    setDirection(1);
    const updateForm = {
      ...form,
      people: people
    };
    setForm(updateForm);
    // if (displayCount === 5) {
    //   await handleFinish(updateForm);
    //   setStep("finish");
    // } else {
    //   setStep("postal");
    // }
    setStep("animaux")
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const handlePetChange = async (pet: string) => {
    setDirection(1);
    const updateForm = {
      ...form,
      pet: pet
    };
    setForm(updateForm);
    if (displayCount === 6) {
      await handleFinish(updateForm);
      setStep("finish");
    } else {
      setStep("postal");
    }
    setCount(count + 1);
    window.scrollTo({ top: 0 });
  };

  const handleZipCodeChange = (zipCode: string, city: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      zipCode: zipCode,
      city: city
    }));
    setStep("contact");
    setCount(count + 1);
    window.scrollTo({ top: 0 });
  };

  const handleContactSubmit = async (firstName: string, lastName: string) => {
    setDirection(1);
    const updateForm = {
      ...form,
      firstname: firstName,
      lastname: lastName,
    };
    setForm(updateForm);
    setCount(count + 1);
    setStep("numéro");
  };

  const handlePhoneNumberSubmit = async (phone: string) => {
    setDirection(1);
    const updateForm = {
      ...form,
      phone: phone
    };
    setForm(updateForm);
    await handleFinish(updateForm);
    setStep("finish");
  };

  const handleFinish = async (form: any) => {
    // API
    console.log("Form submitted:", form);
  };

  useEffect(() => {
    const type = localStorage.getItem("type");
    // const utm_source = localStorage.getItem("utm_source");
    // const redirect = localStorage.getItem("redirect");

    // if (utm_source && ["google", "facebook"].includes(utm_source?.toLocaleLowerCase().trim() || "")) {
    //   setStep("residence");
    //   setDirection(1);
    //   setDisplayCount(9);
    //   setCount(count + 1);
    //   setForm((prev) => ({
    //     ...prev,
    //     utm_source: utm_source,
    //   }));
    //   localStorage.removeItem("utm_source");
    //   setInitialized(true);
    // }

    // if (redirect && redirect.trim() === "true") {
    //   setStep("residence");
    //   setDirection(1);
    //   setDisplayCount(6);
    //   setCount(count + 1);
    //   setForm((prev) => ({
    //     ...prev,
    //     redirect: redirect,
    //   }));
    //   localStorage.removeItem("redirect");
    //   setInitialized(true);
    // }

    if (type) {
      setStep("residence");
      setDirection(1);
      setCount(count + 1);
      setForm((prev) => ({
        ...prev,
        type: type,
      }));
      localStorage.removeItem("type");
      setInitialized(true);
    }

    setInitialized(true);
  }, []);

  useEffect(() => {
    setProgress(Math.floor((count * 100) / displayCount));
  }, [count, displayCount]);

  useEffect(() => {
    if(form.phone && step === "finish") {
      setTimeout(() => {
        setShow(true);
      }, 11000);
    }
  }, [form.phone, step]);

  return (
    <FormsLayout>
      <main className="flex flex-col gap-4">
        {!initialized ? (
          <div className="text-center py-20 text-gray-500">Chargement…</div>
        ) : (
          <>
            {step !== "finish" && <div className="px-6 py-2 bg-[#f15e00] mb-2">
              <h2 className="text-xl text-center lg:text-3xl text-white font-semibold tracking-tight">Votre devis gratuit en 1 minute</h2>
            </div>}
            {!["postal", "contact", "numéro", "finish"].includes(step) && <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-xs lg:text-sm text-slate-800 font-semibold">Étape : <span className="capitalize">{step}</span></span>
                <span className="text-xs lg:text-sm text-red-800 font-semibold">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg`} style={{ width: `${progress}%` }}></div>
              </div>
            </div>}

            {show && <div className="absolute lg:hidden inset-0 bg-[url('/assets/modern_home.jpg')] bg-cover bg-center h-[200px]">
              <div className="text-white text-lg text-center p-1 bg-[#f15e00] font-bold">-20% OFFERTS sur les packs</div>
            </div>}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: direction * 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -50, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ willChange: "transform" }}
              >
                {step === "type" && <TypeHabitation onTypeChange={handleTypeChange} rollbackStep={rollbackStep} typeForm={form.type} />}
                {step === "residence" && <Residence onResidenceChange={handleResidenceChange} rollbackStep={rollbackStep} residenceForm={form.residence} />}
                {step === "taille" && <HeightHabitation onHeightHabitationChange={handleHeightHabitationChange} rollbackStep={rollbackStep} heightHabitationForm={form.heightHabitation} />}
                {step === "equipement" && <Equipment onEquipmentChange={handleEquipmentChange} rollbackStep={rollbackStep} equipmentForm={form.equipment} />}
                {step === "occupants" && <People onPeopleChange={handlePeopletChange} rollbackStep={rollbackStep} peopleForm={form.people} />}
                {step === "animaux" && <Pet onPetChange={handlePetChange} rollbackStep={rollbackStep} petForm={form.pet} />}
                {step === "postal" && <ZipCode onZipCodeChange={handleZipCodeChange} rollbackStep={rollbackStep} zipCodeForm={form.zipCode} />}
                {step === "contact" && <Contact onContactSubmit={handleContactSubmit} rollbackStep={rollbackStep} cityForm={form.city} firstnameForm={form.firstname} lastnameForm={form.lastname} />}
                {step === "numéro" && <PhoneContact onPhoneContactSubmit={handlePhoneNumberSubmit} rollbackStep={rollbackStep} firstnameForm={form.firstname} lastnameForm={form.lastname} phoneForm={form.phone} />}
                {step === "finish" && <FinishStep />}
              </motion.div>
            </AnimatePresence>
            {["postal", "contact", "numéro"].includes(step) && <div className="flex flex-col gap-2 mt-3">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className={`h-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg text-center text-white text-xs`} style={{ width: `${progress}%` }}>{progress}%</div>
              </div>
            </div>}
          </>
        )}
      </main>
    </FormsLayout>
  );
}
