import Link from 'next/link';

export const LegalLinks = () => {
    return (
        <div className="flex gap-x-4 flex-wrap justify-center gap-y-2 bg-white border-t-2 py-3 text-primaryNewComparateurFibre md:flex-row md:gap-x-4 w-full items-center">
          <Link href="/cookies" target="_blank">Gestion des cookies</Link>
          <Link href="/confidentialite" target="_blank">Politique de confidentialité</Link>
          <Link href="/conditions" target="_blank">Conditions générales d'utilisation</Link>
        </div>
    );
};
