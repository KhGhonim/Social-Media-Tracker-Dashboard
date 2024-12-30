import { Toaster } from "react-hot-toast";

export default function UpdateAccForm({
  formData,
  onCancel,
  setFormData,
  handleSubmit,
}) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="bg-[--rightSide-bg-color] shadow-lg rounded-lg p-8 space-y-8"
      >
        <h2 className="text-2xl font-bold text-[--text-color]">Edit Profile</h2>

        <div className="md:grid md:grid-cols-1 max-md:flex max-md:flex-col gap-6">

        <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Country
            </label>
            <select
              name="country"
              onChange={handleChange}
              value={formData?.country}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              <option disabled value="">
                Select Country
              </option>
              <option value="afghanistan">Afghanistan</option>
              <option value="algeria">Algeria</option>
              <option value="egypt">Egypt</option>
              <option value="france">France</option>
              <option value="germany">Germany</option>
              <option value="indonesia">Indonesia</option>
              <option value="iran">Iran</option>
              <option value="iraq">Iraq</option>
              <option value="italy">Italy</option>
              <option value="jordan">Jordan</option>
              <option value="kuwait">Kuwait</option>
              <option value="lebanon">Lebanon</option>
              <option value="libya">Libya</option>
              <option value="malaysia">Malaysia</option>
              <option value="mauritania">Mauritania</option>
              <option value="mexico">Mexico</option>
              <option value="morocco">Morocco</option>
              <option value="oman">Oman</option>
              <option value="pakistan">Pakistan</option>
              <option value="palestine">Palestine</option>
              <option value="philippines">Philippines</option>
              <option value="qatar">Qatar</option>
              <option value="saudi Arabia">Saudi Arabia</option>
              <option value="somali Land">Somali Land</option>
              <option value="somalia">Somalia</option>
              <option value="spain">Spain</option>
              <option value="syria">Syria</option>
              <option value="uae">UAE</option>
              <option value="sudan">Sudan</option>
              <option value="yemen">Yemen</option>
              <option value="thailand">Thailand</option>
              <option value="tunisia">Tunisia</option>
              <option value="turkey">Turkey</option>
              <option value="united states">United States</option>
              <option value="united kingdom">United Kingdom</option>
              <option value="russia">Russia</option>
              <option value="india">India</option>
              <option value="nepal">Nepal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Region
            </label>
            <select
              name="region"
              onChange={handleChange}
              value={formData?.region}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              <option disabled value="">
                Select Region
              </option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="gulf">Gulf</option>
              <option value="north america">North America</option>
              <option value="south america">South America</option>
              <option value="australia">Australia</option>
              <option value="europe">Europe</option>
              <option value="middle east">Middle East</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Platform
            </label>
            <select
              name="platform"
              onChange={handleChange}
              value={formData?.platform}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              <option disabled value="">
                Select Platform
              </option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="linkedIn">LinkedIn</option>
              <option value="tiktok">TikTok</option>
              <option value="youtube">YouTube</option>
              <option value="pinterest">Pinterest</option>
              <option value="snapchat">Snapchat</option>
              <option value="reddit">Reddit</option>
              <option value="tumblr">Tumblr</option>
              <option value="blogspot">Blogspot</option>
              <option value="okru">OK.RU</option>
              <option value="turkkitap">1000Kitap</option>
              <option value="blogsky">Blogsky</option>
              <option value="kizlarsoruyor">Kızlarsoruyor</option>
              <option value="balatarin">Balatarin</option>
              <option value="virasty">Virasty</option>
              <option value="vk">VK</option>
              <option value="threads">Threads</option>
              <option value="telegram">Telegram</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Category
            </label>
            <select
              name="acc_category"
              value={formData?.acc_category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              <option disabled value="">
                Select Category
              </option>
              <option value="personal">Personal</option>
              <option value="umberlla">Umberlla</option>
              <option value="native">Native</option>
              <option value="verified">Verified</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              State
            </label>
            <select
              name="acc_state"
              onChange={handleChange}
              value={formData?.acc_state}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              <option disabled value="">
                Select State
              </option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="locked">Temporary Locked</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Account Name
            </label>
            <input
              type="text"
              name="acc_name"
              onChange={handleChange}
              defaultValue={formData?.acc_name}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-[--text-color]">
              Account Bio
            </label>
            <textarea
              name="acc_bio"
              defaultValue={formData?.acc_bio}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Username
            </label>
            <input
              type="text"
              defaultValue={formData?.acc_username}
              name="acc_username"
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Email
            </label>
            <input
              type="email"
              name="acc_email"
              defaultValue={formData?.acc_email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Mobile No
            </label>
            <input
              type="tel"
              name="acc_mobile"
              defaultValue={formData?.acc_mobile}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
              Password
            </label>
            <input
              type="tel"
              name="acc_password_hash"
              defaultValue={formData?.acc_password_hash}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 text-[--text-color] hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[--navbar] text-white rounded-lg hover:bg-[--navbar-hover]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
