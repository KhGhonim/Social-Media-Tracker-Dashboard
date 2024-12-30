import DetailItem from "../DetailItem/DetailItem";

export default function AccountDetails({acc_url, region, country }) {
  return (
    <div className="bg-[--rightSide-bg-color]  text-[--text-color] rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Account Details</h2>
      <div className="space-y-4">
        <DetailItem label="Profile URL" value={<a href={acc_url} className="text-indigo-600 hover:underline">{acc_url}</a>} />
        <DetailItem label="Region" value={region} />
        <DetailItem label="State" value={country} />
      </div>
    </div>
  );
}