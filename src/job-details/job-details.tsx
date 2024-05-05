import { Grid } from "@mui/material";
import { RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import MediaCard from "../components/custom-card";
import { SampleJD, fetchSampleJd } from "../redux/slices/jobDetailsSlice";
import CustomDropdown from "../components/custom-dropdown";
import { employees, experience, minBaseSalary, officeTypes, roles } from "../constants";
import "./job-details.css"
import { DropdownOptions, Option } from "../components";


const JobDetails = () => {
    const dispatch = useAppDispatch();
    const sampleJdData = useAppSelector((state: RootState) => state?.common?.sampleJD);
    const [officeType, setOfficeType] = useState<Option[]>([]);
    const [rolesSelection, setRolesSelection] = useState<Option[]>([])
    const [minBasePay, setMinBasePay] = useState("")
    const [employeesNo, setEmployeesNo] = useState("")
    const [exp, setExp] = useState("")
    const [companyName, setCompanyName] = useState('')

    const isLoading = useAppSelector(
        (state: RootState) => state?.jobDetails?.loading
    );
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch(fetchSampleJd(10));
    }, [dispatch]);

    const handleScroll = (limit: number) => {
        const container = containerRef.current;
        if (container) {
            if (
                container.scrollTop + container.clientHeight >=
                container.scrollHeight
            ) {
                // Load more data
                dispatch(fetchSampleJd(limit));
            }
        }
    };

    useEffect(() => {
        const handleScrollWithLimit = () => handleScroll(sampleJdData?.jdList.length + 10);
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScrollWithLimit);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScrollWithLimit);
            }
        };
    }, [sampleJdData?.jdList.length]);

    //Functions to handle dropdown and input field
    const handleOfficeType = (selectedOption: any) => {
        const value = selectedOption?.map((item: { value: string }) => (item?.value))
        setOfficeType(value)
    };
    const handleRoles = (selectedOption: any) => {
        const value = selectedOption?.map((item: { value: string }) => (item?.value))
        setRolesSelection(value)
    };

    const handleEmployees = (selectedOption: { label: string | undefined; value: string | undefined }): void => {
        if (selectedOption && selectedOption.value !== undefined) {
            setEmployeesNo(selectedOption.value);
        }
    };


    const handleExperience = (selectedOption: { label: string | undefined; value: string | undefined }): void => {
        if (selectedOption && selectedOption.value !== undefined) {
            setExp(selectedOption.value);
        }
    };

    const handleMinBasePay = (selectedOption: { label: string | undefined; value: string | undefined }): void => {
        if (selectedOption && selectedOption.value !== undefined) {
            setMinBasePay(selectedOption.value);
        }
    };

    //Filters based on Exp and the company name

    const filterJd =
        companyName && exp ?
            sampleJdData?.jdList?.filter((item: { companyName: string; minExp: string; }) => {
                return item?.companyName.toLowerCase().includes(companyName.toLowerCase()) && item?.minExp === exp;
            }) :
            companyName ?
                sampleJdData?.jdList?.filter((item: { companyName: string; }) => {
                    return companyName.toLowerCase() === '' ? item?.companyName : item?.companyName.toLowerCase().includes(companyName);
                }) :
                exp ?
                    sampleJdData?.jdList?.filter((item: { minExp: string; }) => {
                        return item?.minExp === exp;
                    }) :
                    sampleJdData?.jdList;



    return (
        <div ref={containerRef} style={{ overflowY: "auto", height: "100vh" }} >
            <Grid container spacing={2} className="main-container">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomDropdown
                        defaultValue={rolesSelection}
                        onChange={handleRoles}
                        options={roles}
                        placeholder="Roles"
                        isSearchable
                        isClearable
                        isMulti
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomDropdown
                        defaultValue={employeesNo}
                        onChange={handleEmployees}
                        options={employees}
                        placeholder="Number of Employees"
                        isSearchable
                        isClearable
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomDropdown
                        defaultValue={exp}
                        onChange={handleExperience}
                        options={experience}
                        placeholder="Experience"
                        isSearchable
                        isClearable
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomDropdown
                        defaultValue={minBasePay}
                        onChange={handleMinBasePay}
                        options={minBaseSalary}
                        placeholder="Minimun Base Pay Salary"
                        isSearchable
                        isClearable
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomDropdown
                        defaultValue={officeType}
                        onChange={handleOfficeType}
                        options={officeTypes}
                        placeholder="Remote"
                        isSearchable
                        isClearable
                        isMulti
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <input id="outlined-basic" placeholder="Search Company Name" className="company-input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </Grid>
            </Grid>
            <Grid container spacing={2} className="main-container">
                {filterJd && filterJd?.map((item: SampleJD, index: number) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index} mt={1}>
                        <MediaCard item={item} />
                    </Grid>
                ))}
                {isLoading && <p>Loading...</p>}
            </Grid>
        </div>
    );
};

export default JobDetails;