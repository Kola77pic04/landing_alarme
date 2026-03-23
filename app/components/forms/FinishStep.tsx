"use client";

import { useEffect, useState } from "react";

export default function FinishStep() {
    const [seconds, setSeconds] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [currentText, setCurrentText] = useState("");

    const texts = [
        { second: 1, text: "Analyse de vos réponses..." },
        { second: 3, text: "Recherche des meilleures solutions..." },
        { second: 6, text: "Optimisation de votre projet..." },
        { second: 9, text: "Finalisation..." },
    ];

    useEffect(() => {
        setCurrentText(texts[0].text);

        const timer = setInterval(() => {
            setSeconds((prev) => {
                const newTime = prev + 1;

                const current = texts.find(
                    (t, i) =>
                        newTime > (texts[i - 1]?.second ?? 0) &&
                        newTime <= t.second
                );

                if (current) {
                    setCurrentText(current.text);
                }

                if (newTime > 10) {
                    clearInterval(timer);
                    setIsLoading(true);
                    return prev;
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {isLoading &&
                <div className="lg:bg-white lg:rounded-xl lg:shadow-sm min-h-[60vh] mt-28 lg:mt-0">
                    <div className="hidden lg:block bg-[url('/assets/modern_home.jpg')] bg-cover bg-center h-[200px] rounded-t-xl">
                        <div className="text-white text-lg text-center p-1 bg-[#f15e00] font-bold rounded-t-xl">-20% OFFERTS sur les packs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        {/* ✅ Message final */}
                        <div className="bg-white lg:bg-transparent rounded-xl shadow-sm lg:shadow-none px-6 py-8 lg:px-8 lg:py-8 flex flex-col gap-6">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-xs font-semibold">1</span>
                                    <div className="border-slate-300 border-[1px] rounded-full w-12 h-12 flex items-center justify-center bg-teal-500 p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 fill-white" viewBox="0 0 24 24"><title>list-box-outline</title><path d="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" /></svg>
                                    </div>
                                    <span className="text-xs text-center text-slate-900">Demande <br /> d'un devis</span>
                                </div>
                                <hr className="w-10 self-center -mt-6 border-slate-400" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-xs font-semibold text-red-600">2</span>
                                    <div className="border-red-300 border-[1px] rounded-full w-12 h-12 flex items-center justify-center p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 fill-slate-900" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Layer_1" viewBox="0 0 32 32" xmlSpace="preserve">
                                            <path id="customer--service_2_" d="M31.36,31h-0.72c0-6.432-4.777-12.232-11.359-13.792c-0.15-0.036-0.261-0.163-0.275-0.317  c-0.015-0.153,0.071-0.299,0.212-0.362c1.328-0.591,2.47-1.537,3.302-2.734l0.592,0.411c-0.725,1.043-1.666,1.911-2.753,2.546  C26.785,18.688,31.36,24.54,31.36,31z M1.36,31H0.64c0-6.46,4.574-12.312,11.002-14.248c-2.634-1.539-4.291-4.375-4.291-7.465  c0-4.768,3.879-8.647,8.648-8.647c2.583,0,5.01,1.141,6.659,3.13l-0.555,0.46C20.593,2.406,18.368,1.36,16,1.36  c-4.372,0-7.928,3.556-7.928,7.927c0,3.125,1.849,5.968,4.711,7.241c0.141,0.063,0.226,0.209,0.212,0.362  c-0.014,0.154-0.125,0.281-0.275,0.317C6.137,18.768,1.36,24.568,1.36,31z M19,13.36c-0.75,0-1.36-0.61-1.36-1.36  s0.61-1.36,1.36-1.36c0.621,0,1.146,0.418,1.308,0.987C22.172,11.47,23.64,9.903,23.64,8V6h0.721v2c0,2.298-1.788,4.187-4.046,4.349  C20.16,12.93,19.63,13.36,19,13.36z M19,11.36c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64  S19.353,11.36,19,11.36z" />
                                            <rect id="_Transparent_Rectangle" style={{ fill: 'none' }} width="32" height="32" />
                                        </svg>
                                    </div>
                                    <span className="text-xs text-center text-slate-900">Diagnostic <br /> sur place</span>
                                </div>
                                <hr className="w-10 self-center -mt-6 border-slate-400" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-xs font-semibold text-red-600">3</span>
                                    <div className="border-red-300 border-[1px] rounded-full w-12 h-12 flex items-center justify-center p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 fill-slate-900" viewBox="0 0 24 24" fill="none">
                                            <path d="M22 22L2 22" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M2 11L10.1259 4.49931C11.2216 3.62279 12.7784 3.62279 13.8741 4.49931L22 11" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            <path opacity="0.5" d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M4 22V9.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M20 22V9.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            <path opacity="0.5" d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393C9 14.8787 9 15.5858 9 17V22" stroke="#1C274C" strokeWidth="1.5" />
                                            <path opacity="0.5" d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#1C274C" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <span className="text-xs text-center text-slate-900">Installation</span>
                                </div>
                            </div>
                            <div className="text-center space-y-4 max-w-lg">
                                <h3 className="text-2xl lg:text-[28px] font-medium">
                                    Merci, votre demande est bien prise en compte.
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Nous allons vous rappeler dans quelques minutes pour prendre rendez-vous avec un expert sécurité.
                                </p>
                                <p className="text-sm text-slate-700">
                                    Lun.-Ven. 10h-20h
                                </p>
                            </div>
                        </div>
                    </div >
                </div>}
            {/* ✅ Loader */}
            {
                !isLoading && (
                    <div className="flex flex-col items-center gap-6 bg-white px-6 py-10 rounded-xl shadow-sm w-full">
                        <div role="status"> <svg aria-hidden="true" className="inline w-12 h-12 text-gray-200 animate-spin fill-[#f15e00]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /> <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /> </svg> <span className="sr-only"></span> </div>
                        <p className="text-sm text-slate-600 text-center">
                            {currentText}
                        </p>
                    </div>
                )
            }
        </div>
    );
}