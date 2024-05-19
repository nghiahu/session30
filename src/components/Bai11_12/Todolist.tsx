import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import JobItem from "./Joitem";


type JobType = {
  id: string;
  name: string;
  status: boolean;
};

export default function TodoList() {
  const [inputValue, setInputValue] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [listJob, setListJob] = useState<JobType[]>(() => {
    const jobLocal = localStorage.getItem("jobs");
    const jobs = jobLocal ? JSON.parse(jobLocal) : [];

    return jobs;
  });
  const [typeButton, setTypeButton] = useState<string>("add");
  const [idUpdate, setIdUpdate] = useState<string>("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const saveData = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));

    setListJob(value);
  };

  const handleCreateJob = (): void => {
    if (inputValue) {
      const job: JobType = {
        id: uuidv4(),
        name: inputValue,
        status: false,
      };
      listJob.push(job);
      saveData("jobs", listJob);
      setInputValue("");
    } else {
      setShowError(true);
    }
  };
  const handleDelete = (id: string) => {
    const filterJob = listJob.filter((job: JobType) => job.id !== id);
    saveData("jobs", filterJob);
  };
  const handleChecked = (id: string) => {
    const updateJobs: JobType[] = listJob.map((job: JobType) => {
      if (job.id === id) {
        return { ...job, status: !job.status };
      }
      return job;
    });
    saveData("jobs", updateJobs);
  };
  const totalCountJobSuccess = () => {
    const filterJobSuccess = listJob.filter((job: JobType) => job.status);
    return filterJobSuccess.length;
  };
  const handleUpdateName = (id: string) => {
    const findJob = listJob.find((job: JobType) => job.id === id);
    if (findJob) {
      setTypeButton("edit");
      setInputValue(findJob?.name);
      setIdUpdate(id);
    }
  };
  const handleSaveUpdate = () => {
    const updateJobs = listJob.map((job: JobType) => {
      if (job.id === idUpdate) {
        return { ...job, name: inputValue };
      }
      return job;
    });

    saveData("jobs", updateJobs);
    setInputValue("");
    setTypeButton("add");
  };

  return (
    <>
      <div className="main">
        <div className="todo-container">
          <header>
            <h3 className="header-title">Danh sách công việc</h3>
            <div className="job-input">
              <input
                value={inputValue}
                onChange={handleChangeValue}
                className="input"
                type="text"
              />
              {typeButton === "add" ? (
                <>
                  <button onClick={handleCreateJob} className="btn btn-add">
                    Thêm
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleSaveUpdate} className="btn btn-add">
                    Cập nhật
                  </button>
                </>
              )}
            </div>
            {
              showError && (
                <p className="error">Tên công việc không được để trống.</p>
              )
            }
          </header>
          <ul className="list-job">
            {listJob.map((job: JobType) => (
              <div key={job.id}>
                <JobItem
                  job={job}
                  handleDelete={handleDelete}
                  handleChecked={handleChecked}
                  handleUpdateName={handleUpdateName}
                />
              </div>
            ))}
          </ul>
          <footer className="job-footer">
            {totalCountJobSuccess() === listJob.length ? (
              <>
                <span>Hoàn thành công việc</span>
              </>
            ) : (
              <>
                <span>Số công việc hoàn thành</span>:
                <b>{totalCountJobSuccess()}</b>
              </>
            )}
          </footer>
        </div>
      </div>
    </>
  );
}