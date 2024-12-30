import { useTranslation } from "react-i18next";
import { FaShield, FaSpinner } from "react-icons/fa6";

export default function NewAccountForm({
  handleSubmit,
  handleChange,
  isloading,
}) {
  const { t } = useTranslation();

  return (
    <div
      id="#new-account"
      className="bg-[--rightSide-bg-color]  text-[--text-color] rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto max-md:pb-28 "
    >
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center justify-center bg-[--navbar] rounded-full p-4 shadow-md">
          <FaShield className="w-10 h-10 text-[--allwhite]" />
        </div>
        <h1 className="text-3xl font-bold text-[--text-color] mt-4">
        {t('addSocialMediaAccount')}
        </h1>
        <p className="text-gray-500 mt-2">
        {t('fillDetails')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Region and Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('country')} <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
              defaultValue={""}
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
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('region')} <span className="text-red-500">*</span>
            </label>
            <select
              name="region"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
              defaultValue={""}
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
          {/* Platform */}
          <div>
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('platform')} <span className="text-red-500">*</span>
            </label>
            <select
              name="platform"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
              defaultValue={""}
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
          {/* Catagory */}
          <div>
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('category')} <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
              defaultValue={""}
            >
            <option disabled value="">{t('selectCategory')}</option>
              <option value="Personal">{t('personal')}</option>
              <option value="Umbrella">{t('umbrella')}</option>
              <option value="Native">{t('native')}</option>
              <option value="Verified">{t('verified')}</option>
            </select>
          </div>
        </div>

                  {/* State */}
                  <div>
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('state')} <span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
              defaultValue={""}
            >
            <option disabled value="">{t('selectState')}</option>
              <option value="Active">{t('active')}</option>
              <option value="Suspended">{t('suspended')}</option>
              <option value="Locked">{t('temporaryLocked')}</option>
            </select>
          </div>

        {/* Account Name */}
        <div>
          <label className="block text-sm font-medium text-[--text-color] mb-1">
          {t('accountName')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="accountName"
            required
            className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
            onChange={handleChange}
          />
        </div>

        {/* Account Bio */}
        <div>
          <label className="block text-sm font-medium text-[--text-color] mb-1">
          {t('accountBio')} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="accountBio"
            rows={3}
            className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
            onChange={handleChange}
            required
          />
        </div>

        {/* Account URL */}
        <div>
          <label className="block text-sm font-medium text-[--text-color] mb-1">
          {t('accountURL')}<span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            name="accountUrl"
            required
            className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
            onChange={handleChange}
          />
        </div>

        {/* Username and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('username')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('email')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Password and Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('password')} <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t('mobileNo')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobileNo"
              required
              className="block w-full rounded-lg border bg-[--bg-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <button
            disabled={isloading}
            type="submit"
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg py-3 px-6 shadow-lg focus:ring-4 focus:ring-indigo-300 transition-all"
          >
            {isloading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              t('saveAccount')
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
