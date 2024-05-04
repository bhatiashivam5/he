import { Grid } from "@mui/material";
import { RootState } from "./redux/store";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import MediaCard from "./components/custom-card";
import { SampleJD, fetchSampleJd } from "./redux/slices/jobDetailsSlice";

const JobDetails = () => {
    const dispatch = useAppDispatch();
    const sampleJdData = useAppSelector((state: RootState) => state?.common?.sampleJD);
    console.log(sampleJdData);

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



    return (
        <div ref={containerRef} style={{ overflowY: "auto", height: "100vh" }} >
            <Grid container spacing={2} className="main-container">
                {sampleJdData?.jdList && sampleJdData?.jdList?.map((item: SampleJD, index: number) => (
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
