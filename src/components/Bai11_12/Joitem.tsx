import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

type JobType = {
    id: string;
    name: string;
    status: boolean;
  };
  
  type PropType = {
    job: JobType;
    handleDelete: (id: string) => void;
    handleChecked: (id: string) => void;
    handleUpdateName: (id: string) => void;
  };
  
  export default function JobItem({
    job,
    handleDelete,
    handleChecked,
    handleUpdateName,
  }: PropType) {
    return (
      <>
        <li className="job-item">
          <div className="item-left">
            <input
              onChange={() => handleChecked(job.id)}
              checked={job.status}
              className="input-checkbox"
              type="checkbox"
            />
            {job.status ? (
              <s className="job-name">{job.name}</s>
            ) : (
              <span className="job-name">{job.name}</span>
            )}
          </div>
          <div className="item-right">
          <EditOutlined onClick={() => handleUpdateName(job.id)}
              className="btn btn-edit"/>

            <DeleteOutlined onClick={() => handleDelete(job.id)}
              className="btn btn-delete"/>
          </div>
        </li>
      </>
    );
  }