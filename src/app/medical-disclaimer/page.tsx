import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Medical disclaimer for Jaw Pain Guide.",
  alternates: { canonical: "/medical-disclaimer" },
};

export default function MedicalDisclaimerPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Medical Disclaimer</h1>
        <div className="prose mt-8 max-w-none">
          <p>
            Jaw Pain Guide provides educational information only. The content on this site is not medical advice,
            diagnosis, or treatment, and it does not create a clinician-patient relationship.
          </p>
          <p>
            TMJ symptoms can overlap with dental disease, trauma, infection, headache disorders, sleep disorders, and
            other conditions. Readers should use this content as general information and seek care from a qualified
            dentist, physician, physical therapist, or orofacial pain specialist for personal advice.
          </p>
          <p>
            Do not delay professional care because of something you read on this site. If you have severe swelling,
            fever, facial trauma, sudden bite change, inability to open the mouth, or other urgent symptoms, seek
            immediate medical evaluation.
          </p>
        </div>
      </article>
    </section>
  );
}
