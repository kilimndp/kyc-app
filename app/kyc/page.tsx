import KYCForm from '@/components/KYCForm';

export default function KYCPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Know Your Customer (KYC)</h1>
      <KYCForm />
    </div>
  );
}