import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FaSpinner } from "react-icons/fa";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

export default function AnalyticsTable({
  AnalyticsTableData,
  Col1,
  Col2,
  Col3,
  Col4,
  Col5,
  Col6,
  Col7,
  Col8,
  Col9,
  Col10,
  Col11,
  Col12,
  Col13,
  Col14,
  Col15,
  Col16,
  Col17,
  Col18,
  Col19,
  Col20,
}) {
  const { t } = useTranslation();

  
  const columns: GridColDef[] = [
    {
      field: Col1,
      headerName: "ID",
      width: 50,
      editable: false,
      type: "number",
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      renderCell: ({ row: { id } }) => {
        return <p className="capitalize text-[--text-color]">{id}</p>;
      },
    },
    {
      field: Col2,
      headerName: t("region"),
      editable: false,
      headerAlign: "center",
      align: "center",
      width: 70,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      renderCell: ({ row: { acc_region } }) => {
        return <p className="capitalize text-[--text-color]">{acc_region}</p>;
      },
      type: "string",
    },
    {
      field: Col3,
      headerName: t("category"),
      width: 100,
      editable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",

      renderCell: ({ row: { acc_category } }) => {
        return <p className="capitalize text-[--text-color]">{acc_category}</p>;
      },
      type: "string",
    },

    {
      field: Col4,
      headerName: t('country'),
      width: 100,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_country } }) => {
        return <p className="capitalize text-[--text-color]">{acc_country}</p>;
      },
      type: "string",
    },
    {
      field: Col5,
      headerName: t('platform'),
      width: 100,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_platform } }) => {
        return <p className="capitalize text-[--text-color]">{acc_platform}</p>;
      },
      type: "string",
    },
    {
      field: Col7,
      headerName: t('accountURL'),
      width: 150,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_url } }) => {
        return <p className="text-[--text-color]">{acc_url}</p>;
      },
      type: "string",
    },
    {
      field: Col8,
      headerName: t('state'),
      width: 100,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_state } }) => {
        return (
          <p
            className={`${
              acc_state === "active"
                ? "bg-green-500"
                : acc_state === "suspended"
                ? "bg-red-500"
                : "bg-yellow-500"
            } capitalize `}
          >
            {acc_state}
          </p>
        );
      },
      type: "string",
    },
    {
      field: Col9,
      headerName: t('followers'),
      width: 100,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_fs } }) => {
        return <p className="text-[--text-color]">{acc_fs}</p>;
      },
      type: "string",
    },
    {
      field: Col10,
      headerName: t('following'),
      width: 100,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_fw } }) => {
        return <p className="text-[--text-color]">{acc_fw}</p>;
      },
    },
    {
      field: Col11,
      headerName: t('posts'),
      width: 100,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_post } }) => {
        return <p className="text-[--text-color]">{acc_post}</p>;
      },
      type: "string",
    },
    {
      field: Col12,
      headerName: t('retweets'),
      width: 100,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_retweet } }) => {
        return <p className="text-[--text-color]">{acc_retweet}</p>;
      },
      type: "string",
    },
    {
      field: Col13,
      headerName: t('likes'),
      width: 100,
      editable: false,
      headerAlign: "center",
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      align: "center",
      renderCell: ({ row: { acc_likes } }) => {
        return <p className="text-[--text-color]">{acc_likes}</p>;
      },
    },
    {
      field: Col14,
      headerName: t('comments'),
      width: 100,
      editable: false,
      headerAlign: "center",
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      align: "center",
      renderCell: ({ row: { acc_comments } }) => {
        return <p className="text-[--text-color]">{acc_comments}</p>;
      },
      type: "string",
    },
    {
      field: Col15,
      headerName: t('friends'),
      width: 100,
      editable: false,
      headerAlign: "center",
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      align: "center",
      renderCell: ({ row: { acc_friends } }) => {
        return <p className="text-[--text-color]">{acc_friends}</p>;
      },
      type: "string",
    },
    {
      field: Col16,
      headerName: t('impressions'),
      width: 100,
      editable: false,
      headerAlign: "center",
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      align: "center",
      renderCell: ({ row: { acc_imp } }) => {
        return <p className="text-[--text-color]">{acc_imp}</p>;
      },
      type: "string",
    },
    {
      field: Col17,
      headerName: t('karma'),
      width: 100,
      editable: false,
      headerAlign: "center",
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      align: "center",
      renderCell: ({ row: { acc_karma } }) => {
        return <p className="text-[--text-color]">{acc_karma}</p>;
      },
      type: "string",
    },
    {
      field: Col18,
      headerName: t('pins'),
      width: 100,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_pins } }) => {
        return <p className="text-[--text-color]">{acc_pins}</p>;
      },
      type: "string",
    },
    {
      field: Col19,
      headerName: t('votes'),
      width: 100,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_votes } }) => {
        return <p className="text-[--text-color]">{acc_votes}</p>;
      },
      type: "string",
    },
    {
      field: Col20,
      headerName: t('views'),
      width: 100,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_vs } }) => {
        return <p className="text-[--text-color]">{acc_vs}</p>;
      },
      type: "string",
    },
    {
      field: Col6,
      headerName: t('articles'),
      width: 100,
      editable: false,
      headerClassName: "bg-[--rightSide-bg-color] text-[--text-color]",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { acc_articles } }) => {
        return <p className="text-[--text-color]">{acc_articles}</p>;
      },
      type: "string",
    },
  ];

  if (!AnalyticsTableData || AnalyticsTableData.length === 0) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  return (
    <div className={`w-full h-full mt-6 transition-all text-[--text-color] ease-in-out duration-300`}>
      <DataGrid
        rows={AnalyticsTableData}
        pageSizeOptions={[25, 50, 100]}
        disableRowSelectionOnClick
        checkboxSelection
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        className="shadow-lg rounded-lg border text-[--text-color]  border-gray-200 bg-[--bg-color]"
      />
    </div>
  );
}
