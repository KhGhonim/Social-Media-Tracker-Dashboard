import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
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
            {t('country')} 
            </label>
            <select
              name="country"
              onChange={handleChange}
              value={formData?.country}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              <option disabled value="">
              {t('selectCountry')}
              </option>
              <option value="Afghanistan">{t('afghanistan')}</option>
              <option value="Algeria">{t('algeria')}</option>
              <option value="Egypt">{t('egypt')}</option>
              <option value="France">{t('france')}</option>
              <option value="Germany">{t('germany')}</option>
              <option value="Indonesia">{t('indonesia')}</option>
              <option value="Iran">{t('iran')}</option>
              <option value="Iraq">{t('iraq')}</option>
              <option value="Italy">{t('italy')}</option>
              <option value="Jordan">{t('jordan')}</option>
              <option value="Kuwait">{t('kuwait')}</option>
              <option value="Lebanon">{t('lebanon')}</option>
              <option value="Libya">{t('libya')}</option>
              <option value="Malaysia">{t('malaysia')}</option>
              <option value="Mauritania">{t('mauritania')}</option>
              <option value="Mexico">{t('mexico')}</option>
              <option value="Morocco">{t('morocco')}</option>
              <option value="Oman">{t('oman')}</option>
              <option value="Pakistan">{t('pakistan')}</option>
              <option value="Palestine">{t('palestine')}</option>
              <option value="Philippines">{t('philippines')}</option>
              <option value="Qatar">{t('qatar')}</option>
              <option value="Saudi Arabia">{t('saudiArabia')}</option>
              <option value="Somali Land">{t('somaliLand')}</option>
              <option value="Somalia">{t('somalia')}</option>
              <option value="Spain">{t('spain')}</option>
              <option value="Syria">{t('syria')}</option>
              <option value="UAE">{t('uae')}</option>
              <option value="Sudan">{t('sudan')}</option>
              <option value="Yemen">{t('yemen')}</option>
              <option value="Thailand">{t('thailand')}</option>
              <option value="Tunisia">{t('tunisia')}</option>
              <option value="Turkey">{t('turkey')}</option>
              <option value="United States">{t('unitedStates')}</option>
              <option value="United Kingdom">{t('unitedKingdom')}</option>
              <option value="Russia">{t('russia')}</option>
              <option value="India">{t('india')}</option>
              <option value="Nepal">{t('nepal')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
            {t('selectRegion')}
            </label>
            <select
              name="region"
              onChange={handleChange}
              value={formData?.region}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              <option disabled value="">
              {t('selectRegion')}
              </option>
              <option value="Africa">{t('africa')}</option>
              <option value="Asia">{t('asia')}</option>
              <option value="Gulf">{t('gulf')}</option>
              <option value="North America">{t('northAmerica')}</option>
              <option value="South America">{t('southAmerica')}</option>
              <option value="Australia">{t('australia')}</option>
              <option value="Europe">{t('europe')}</option>
              <option value="Middle East">{t('middleEast')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
            {t('platform')} 
            </label>
            <select
              name="platform"
              onChange={handleChange}
              value={formData?.platform}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
            <option disabled value="">{t('platform')}</option>
              <option value="Facebook">{t('facebook')}</option>
              <option value="Instagram">{t('instagram')}</option>
              <option value="Twitter">{t('twitter')}</option>
              <option value="LinkedIn">{t('linkedin')}</option>
              <option value="TikTok">{t('tiktok')}</option>
              <option value="YouTube">{t('youtube')}</option>
              <option value="Pinterest">{t('pinterest')}</option>
              <option value="snapchat">{t('Snapchat')}</option>
              <option value="Reddit">{t('reddit')}</option>
              <option value="Tumblr">{t('tumblr')}</option>
              <option value="Blogspot">{t('blogger')}</option>
              <option value="okru">{t('okru')}</option>
              <option value="turkkitap">{t('kitap')}</option>
              <option value="Blogsky">{t('blogsky')}</option>
              <option value="kizlarsoruyor">{t('kizlarsoruyor')}</option>
              <option value="balatarin">{t('balatarin')}</option>
              <option value="virasty">{t('virasty')}</option>
              <option value="vk">{t('vk')}</option>
              <option value="threads">{t('threads')}</option>
              <option value="telegram">{t('telegram')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
            {t('category')}
            </label>
            <select
              name="acc_category"
              value={formData?.acc_category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              <option disabled value="">{t('selectCategory')}</option>
              <option value="Personal">{t('personal')}</option>
              <option value="Umbrella">{t('umbrella')}</option>
              <option value="Native">{t('native')}</option>
              <option value="Verified">{t('verified')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
            {t('state')}
            </label>
            <select
              name="acc_state"
              onChange={handleChange}
              value={formData?.acc_state}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
            <option disabled value="">{t('selectState')}</option>
              <option value="Active">{t('active')}</option>
              <option value="Suspended">{t('suspended')}</option>
              <option value="Locked">{t('temporaryLocked')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[--text-color]">
            {t('accountName')}
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
            {t('accountBio')}
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
            {t('username')}
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
            {t('email')}
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
            {t('dropbox')}
            </label>
            <input
              type="text"
              name="dropbox"
              defaultValue={formData?.dropbox}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color]">
            {t('RSS')}
            </label>
            <input
              type="text"
              name="rss"
              defaultValue={formData?.rss}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 text-[--text-color] bg-[--bg-color] px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[--text-color]">
            {t('mobileNo')}
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
            {t('password')}
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
          {t('Cancel')}
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[--navbar] text-white rounded-lg hover:bg-[--navbar-hover]"
          >
          {t('saveAccount')}
          </button>
        </div>
      </form>
    </div>
  );
}
