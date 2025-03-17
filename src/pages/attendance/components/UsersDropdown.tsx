/* eslint-disable @typescript-eslint/no-explicit-any */
import {Select} from "antd";
import {StudentDataType} from "../AttendanceRegister";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    studentsData: any;
    setSelectedStudent: React.Dispatch<
        React.SetStateAction<StudentDataType | null>
    >;
}

const UsersDropdown: React.FC<Props> = ({studentsData, setSelectedStudent}) => {
    const onChange = (value: string | undefined) => {
        if (value) {
            const selectedItem = studentsData.find(
                (item: StudentDataType) => item._id === value
            );
            if (selectedItem) {
                setSelectedStudent({
                    _id: selectedItem?._id,
                    firstName: selectedItem?.firstName,
                    lastName: selectedItem?.lastName,
                });
            } else {
                setSelectedStudent(null);
            }
        } else {
            setSelectedStudent(null);
        }
    };

    const options = studentsData?.map(
        (item: {firstName: string; _id: string}) => ({
            value: item?._id,
            label: item?.firstName,
        })
    );

    return (
        <Select
            showSearch
            placeholder="Click to Select"
            optionFilterProp="children"
            onChange={onChange}
            allowClear
            className="w-full h-10 border border-primary-color rounded outline-none text-xs text-[#827F7F]"
            // onSearch={}
            filterOption={(input, option:any) =>
                (option?.label ?? "")
                    ?.toLowerCase()
                    .includes(input.toLowerCase())
            }
            options={options}
        />
    );
};
export default UsersDropdown;
