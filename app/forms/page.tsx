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

export default function Home() {
  const [form, setForm] = useState({
    type: "",
    residence: "",
    heightHabitation: "",
    equipment: "",
    people: "",
    zipCode: "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [step, setStep] = useState<"type" | "residence" | "taille" | "equipement" | "occupants" | "postal" | "contact" | "finish">("type");

  const [count, setCount] = useState<number>(1);
  const [progress, setProgress] = useState<number>(Math.floor((count * 100) / 7));
  const [direction, setDirection] = useState(1);
  const [initialized, setInitialized] = useState(false);

  const rollbackStep = () => {
    if (step === "type") {
      window.history.back();
    } else {
      setDirection(-1);
      setCount(count - 1);
      setProgress(Math.floor(((count - 1) * 100) / 7));
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
      if (step === "postal") {
        setStep("occupants");
      }
      if (step === "contact") {
        setStep("postal");
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
    setProgress(Math.floor(((count + 1) * 100) / 7));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResidenceChange = (type: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      type: type
    }));
    setStep("taille");
    setCount(count + 1);
    setProgress(Math.floor(((count + 1) * 100) / 7));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeightHabitationChange = (heightHabitation: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      heightHabitation: heightHabitation
    }));
    setStep("equipement");
    setCount(count + 1);
    setProgress(Math.floor(((count + 1) * 100) / 7));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEquipmentChange = (equipment: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      equipment: equipment
    }));
    setStep("occupants");
    setCount(count + 1);
    setProgress(Math.floor(((count + 1) * 100) / 7));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePeopletChange = (people: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      people: people
    }));
    setStep("postal");
    setCount(count + 1);
    setProgress(Math.floor(((count + 1) * 100) / 7));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleZipCodeChange = (zipCode: string) => {
    setDirection(1);
    setForm((prev) => ({
      ...prev,
      zipCode: zipCode
    }));
    setStep("contact");
    setCount(count + 1);
    setProgress(Math.floor(((count + 1) * 100) / 7));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (firstName: string, lastName: string, phone: string) => {
    setDirection(1);
    const updateForm = {
      ...form,
      firstname: firstName,
      lastname: lastName,
      phone: phone
    };
    setForm(updateForm);
    // API
    console.log("Form submitted:", updateForm);
    setStep("finish");
  };

  useEffect(() => {
    const type = localStorage.getItem("type");

    if (type) {
      setStep("residence");
      setDirection(1);
      setCount(count + 1);
      setProgress(Math.floor(((count + 1) * 100) / 7));
      setForm((prev) => ({
        ...prev,
        type: type,
      }));
      localStorage.removeItem("type");
      setInitialized(true);
    } else {
      setInitialized(true);
    }
  }, []);

  return (
    <FormsLayout>
      <main className="flex flex-col gap-4">
        {!initialized ? (
          <div className="text-center py-20 text-gray-500">Chargement…</div>
        ) : (
          <>
            {step !== "finish" && <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-xs lg:text-sm text-slate-800 font-semibold">Étape : <span className="capitalize">{step}</span></span>
                <span className="text-xs lg:text-sm text-red-800 font-semibold">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 bg-gradient-to-r from-red-500 to-red-700 rounded-lg`} style={{ width: `${progress}%` }}></div>
              </div>
            </div>}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: direction * 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -100, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {step === "type" && <TypeHabitation onTypeChange={handleTypeChange} rollbackStep={rollbackStep} typeForm={form.type} />}
                {step === "residence" && <Residence onResidenceChange={handleResidenceChange} rollbackStep={rollbackStep} residenceForm={form.residence} />}
                {step === "taille" && <HeightHabitation onHeightHabitationChange={handleHeightHabitationChange} rollbackStep={rollbackStep} heightHabitationForm={form.heightHabitation} />}
                {step === "equipement" && <Equipment onEquipmentChange={handleEquipmentChange} rollbackStep={rollbackStep} equipmentForm={form.equipment} />}
                {step === "occupants" && <People onPeopleChange={handlePeopletChange} rollbackStep={rollbackStep} peopleForm={form.people} />}
                {step === "postal" && <ZipCode onZipCodeChange={handleZipCodeChange} rollbackStep={rollbackStep} zipCodeForm={form.zipCode} />}
                {step === "contact" && <Contact onContactSubmit={handleContactSubmit} rollbackStep={rollbackStep} firstnameForm={form.firstname} lastnameForm={form.lastname} phoneForm={form.phone} />}
                {step === "finish" && <FinishStep />}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </main>
    </FormsLayout>
  );
}
