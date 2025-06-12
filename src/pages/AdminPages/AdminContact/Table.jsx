import {
    Table,
} from "antd";
import {useGetAllFormsQuery} from "../../../services/userApi.jsx";



const ContactTable = () => {
    const { data: getAllContact } = useGetAllFormsQuery();
    const contact = getAllContact?.data;
    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
            render: (text, record, index) => <div>{index + 1}</div>,
        },
        {
            title: "Ad Soyad",
            dataIndex: "fullName",
            key: "fullName",
        },
        {
            title: "Sinif",
            dataIndex: "classNumber",
            key: "classNumber",
        },
        {
            title: "Şəxsi Nömrə",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "Valideyn Ad Soyad",
            dataIndex: "parentFullName",
            key: "parentFullName",

        },
        {
            title: "Valideyn Nömrə",
            dataIndex: "parentPhoneNumber",
            key: "parentPhoneNumber",
        },
    ];

    return (
        <div>
            <Table
                rowKey="id"
                columns={columns}
                dataSource={contact}
                pagination={{ pageSize:6 }}
            />

        </div>
    );
};

export default ContactTable;