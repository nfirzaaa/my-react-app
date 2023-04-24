import {
  Table,
  Popconfirm,
  Space,
  Form,
  Input,
  Button,
  Radio,
  Select,
} from "antd";
// import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { INITIAL_TABLE_DATA } from "./constant";
// import { v4 as uuidv4 } from "uuid";
import {
  useDeleteProducts,
  useGetProducts,
  usePostProducts,
  useUpdateProducts,
} from "./hooks/useProducts";

const CreateProduct = () => {
  const [form] = Form.useForm();
  const user = {
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
  };
  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a \n validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };
  const { Option } = Select;

  const [isLoadingProducts, products, getProducts] = useGetProducts();
  const [isLoadingCreateProducts, createProducts] = usePostProducts();
  const [isLoadingDeleteProducts, deleteProducts] = useDeleteProducts();
  const [isLoadingUpdateProducts, updateProducts] = useUpdateProducts();

  const [data, setData] = useState(INITIAL_TABLE_DATA);
  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMNS = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Product Category",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    {
      title: "Product Freshness",
      dataIndex: "productFreshness",
      key: "productFreshness",
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];


  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    // formBio.resetFields();
  };

  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
  };

  const onAdd = (values) => {
    createProducts(values, () => {
      getProducts();
      // form.resetFields();
    });
  };

  const onDelete = (row_id) => {
    deleteProducts(row_id, () => {
      getProducts();
    });
  };

  const onEdit = (values) => {
    console.log({ values });
    const id = rowData.id;

    updateProducts(id, values, () => {
      getProducts();
      // setIsEdit(false);
      // setRowData();

      // form.resetFields();
      handleCancel();
    });
  };

  useEffect(() => {
    alert("Welcome");
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div
        style={{
          display: "block",
          margin: "0 auto",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <img src={user.avatarURL} alt="avatarURL" style={{ width: 60 }} />
        <br />
        <h4>{article.title.en}</h4>
        <div style={{ whiteSpace: "pre-line" }}>{article.description.en}</div>
        <h4 style={{ textAlign: "center" }}>Detail Product</h4>
      </div>
      {/* form */}
      {/* {isLoadingDataProducts ? (
        <LayoutComponent />
      ) : (
        dataProducts?.map((products) => ( */}
      <Form
        style={{
          width: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
        form={form}
        onFinish={isEdit ? onEdit : onAdd}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        fields={[
          {
            name: ["key"],
            values: rowData?.key,
          },
          {
            name: ["productName"],
            values: rowData?.productName,
          },
          {
            name: ["productCategory"],
            values: rowData?.productCategory,
          },
          {
            name: ["productFreshness"],
            values: rowData?.productFreshness,
          },
          {
            name: ["productPrice"],
            values: rowData?.productPrice,
          },
        ]}
      >
        <Form.Item
          label="Product Name"
          name="productName"
          rules={[
            {
              required: true,
              message: "Please input your product name!",
            },
            {
              pattern: /^[a-zA-Z0-9 ]+$/,
              message:
                "Invalid input! Please input alphabet , numbers, and spaces",
            },
          ]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          label="Product Category"
          name="productCategory"
          rules={[
            {
              required: true,
              message: "Please select your product category!",
            },
            {
              pattern: /^[A-Za-z\s]+$/,
              message:
                "Invalid input! Please input alphabet , numbers, and spaces",
            },
          ]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          name="productFreshness"
          label="Product Freshness"
          rules={[
            {
              required: true,
              message: "Please input the product freshness",
            },
            {
              pattern: /^(Brand New|Second Hand|Refurbished)$/,
              message:
                "Invalid input! Please choose Brand New, Second Hand, or Refurbished",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="Brand New">Brand New</Radio>
            <Radio value="Second Hand">Second Hand</Radio>
            <Radio value="Refurbished">Refurbished</Radio>
            <Radio value="none">none</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="productPrice"
          rules={[
            {
              required: true,
              message: "Please input your product price!",
            },
            {
              pattern: /^\d+(\.\d{1,2})?$/,
              message: "Invalid price format. Please enter a valid price.",
            },
          ]}
        >
          <Input placeholder="Enter product price" />
        </Form.Item>
        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoadingUpdateProducts}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoadingCreateProducts}
          >
            Submit
          </Button>
        )}
      </Form>
      ;<br></br>
      <Table
        rowKey="id"
        columns={TABLE_COLUMNS}
        dataSource={products}
        loading={isLoadingProducts || isLoadingDeleteProducts}
      />
    </>
  );
};

export default CreateProduct;
