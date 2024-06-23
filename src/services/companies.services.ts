// import { Pagination } from "../components/Table";
// import { AxiosResponse } from "axios";
// import axiosInstance from "../../interceptor";
// import { Companies } from "../interfaces/companies";
// import { ColumnTable } from "../interfaces/tables";

// export const getCompanies = async ({
//   page = 1,
//   perPage = 10,
//   ...props
// }: FetchCompaniesProps): Promise<AxiosResponse<FetchCompanies>> => {
//   return await axiosInstance.get<FetchCompanies>(
//     `Companies?page=${page}&perPage=${perPage}${
//       props.query ? "&query=" + props.query : ""
//     }`
//   );
// };

// export const createCompany = async (
//   data: Companies
// ): Promise<AxiosResponse<any>> => {
//   return await axiosInstance.post("companies", data);
// };

// export const editCompany = async (
//   data: Companies
// ): Promise<AxiosResponse<any>> => {
//   return await axiosInstance.patch(`companies/${data.id}`, data);
// };

// export const deleteCompany = async (
//   id: string
// ): Promise<AxiosResponse<any>> => {
//   return await axiosInstance.delete(`companies/${id}`);
// };

// export const getCompaniesColumns = (): ColumnTable[] => [
//   {
//     name: "#",
//     show: true,
//     value: [""],
//     index: true,
//     isDate: false,
//   },
//   {
//     name: "Name",
//     show: true,
//     value: ["company_name"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Contact",
//     show: true,
//     value: ["contact"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Email",
//     show: true,
//     value: ["email"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Address",
//     show: true,
//     value: ["address"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "State",
//     show: true,
//     value: ["state"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Street",
//     show: true,
//     value: ["street"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Zip code",
//     show: true,
//     value: ["zip"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Phone number",
//     show: true,
//     value: ["phone_number"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Web page",
//     show: true,
//     value: ["web_page"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Notes",
//     show: false,
//     value: ["note"],
//     index: false,
//     isDate: false,
//   },
//   {
//     name: "Created at",
//     show: true,
//     value: ["created_at"],
//     index: false,
//     isDate: true,
//   },
// ];

// export interface FetchCompanies {
//   data: Companies[];
//   pagination: Pagination;
//   success: boolean;
// }

// export interface FetchCompaniesProps {
//   page?: number;
//   perPage?: number;
//   query?: string;
// }

// export const defaultCompaniesValues: Companies = {
//   address: "",
//   email: "",
//   company_name: "",
//   contact: "",
//   phone_number: "",
//   state: "",
//   street: "",
//   zip: "",
//   web_page: "",
//   note: "",
// };
