import { FaPhone } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import InfoItem from '../InfoItem/InfoItem'
import { IoMail } from 'react-icons/io5'

export default function AccInfo({acc_mobile, acc_email, acc_username}) {
  return (
    <div className="bg-[--rightSide-bg-color] rounded-xl shadow-lg p-6">
    <h2 className="text-lg font-semibold text-[--text-color] mb-4">Contact Information</h2>
    <div className="space-y-6">
      <InfoItem icon={<FaUser />}  label="Username" value={acc_username} />
      <InfoItem icon={< IoMail />} label="Email" value={acc_email} />
      <InfoItem icon={<FaPhone />} label="Mobile" value={acc_mobile} />
    </div>
  </div>

  )
}
