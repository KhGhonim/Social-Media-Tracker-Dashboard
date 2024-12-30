export const formatTimestampForPostgres = (date) => {
  const isoString = date.toISOString(); // Convert to ISO string
  return isoString.replace('T', ' ').replace('Z', ''); // Format to PostgreSQL-compatible string
};