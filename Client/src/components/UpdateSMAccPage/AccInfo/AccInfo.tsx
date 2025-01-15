import { FaPhone } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import InfoItem from '../InfoItem/InfoItem'
import { IoMail } from 'react-icons/io5'
import { useTranslation } from 'react-i18next';

export default function AccInfo({acc_mobile, acc_email, acc_username}) {
  const { t } = useTranslation();

  return (
    <div className="bg-[--rightSide-bg-color] rounded-xl shadow-lg p-6">
    <h2 className="text-lg font-semibold text-[--text-color] mb-4">{t('Contact Information')}</h2>
    <div className="space-y-6">
      <InfoItem icon={<FaUser />}  label="username" value={acc_username} />
      <InfoItem icon={< IoMail />} label="email" value={acc_email} />
      <InfoItem icon={<FaPhone />} label="mobileNo" value={acc_mobile} />
    </div>
  </div>

  )
}
