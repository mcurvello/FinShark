import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();

  const tabItems = [
    {
      id: 1,
      title: "Company Profile",
      icon: "fas fa-child",
      content: "step 1 content",
    },
    {
      id: 2,
      title: "Income Statment",
      icon: "fas fa-users",
      content: "step 2 content",
    },
    {
      id: 3,
      title: "Balance Sheet",
      icon: "fas fa-network-wired",
      content: "step 3 content",
    },
    {
      id: 4,
      title: "Cash Flow",
      icon: "fa money-check-alt",
      content: "step 4 content",
    },
  ];

  const [company, setCompany] = useState<CompanyProfile>();
  const [activeSidebarItem, setActiveSideBarItem] = useState<number>(1);


  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);

      setCompany(result?.data[0]);
    }

    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <Sidebar
          tabItems={tabItems}
          setActiveSideBarItem={setActiveSideBarItem}
          activeSidebarItem={activeSidebarItem!}
        />
        <CompanyDashboard ticker={ticker!}>
          <Tile title="Company Name" subTitle={company.companyName} />
          <Tile title="Price" subTitle={company.price.toString()} />
          <Tile title="Sector" subTitle={company.sector} />
          <Tile title="DCF" subTitle={company.dcf.toString()} />
          <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
            {company.description}
          </p>
        </CompanyDashboard>
      </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default CompanyPage