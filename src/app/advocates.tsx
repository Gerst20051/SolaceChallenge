"use client";

export default function Advocates({ filteredAdvocates }) {
  return filteredAdvocates.length ? (
    <div>
      <table className="text-xs text-left">
        <thead className="text-s text-gray-700 bg-gray-200">
          <tr>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">City</th>
            <th className="px-6 py-3">Degree</th>
            <th className="px-6 py-3">Specialties</th>
            <th className="px-6 py-3">Years of Experience</th>
            <th className="px-6 py-3">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr key={advocate.id} className="odd:bg-white even:bg-gray-50 border-b">
                <td className="px-6 py-3">{advocate.firstName}</td>
                <td className="px-6 py-3">{advocate.lastName}</td>
                <td className="px-6 py-3">{advocate.city}</td>
                <td className="px-6 py-3">{advocate.degree}</td>
                <td className="px-6 py-3">
                  {advocate.specialties.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </td>
                <td className="px-6 py-3">{advocate.yearsOfExperience}</td>
                <td className="px-6 py-3">{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="m-5 text-center">
      No Matching Advocates
    </div>
  );
}
