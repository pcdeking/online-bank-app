import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [profile, setProfile] =
    useState(null);

  const [account, setAccount] =
    useState(null);

  const [transactions, setTransactions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token =
          localStorage.getItem("token");

        if (!token) {
          navigate("/");
          return;
        }

        const response =
          await api.get(
            "/profile",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );

        setProfile(
          response.data.user
        );

        const accountResponse =
          await api.get(
            `/accounts/${response.data.user.userId}`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );

        setAccount(
          accountResponse.data
        );

        const transactionsResponse =
          await api.get(
            `/accounts/${response.data.user.userId}/transactions`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );

        setTransactions(
          transactionsResponse.data
        );

        setLoading(false);

      } catch (error) {
        console.error(error);

        localStorage.removeItem(
          "token"
        );

        setLoading(false);

        navigate("/");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px"
  }}
>
  <button
    onClick={handleLogout}
  >
    Logout
  </button>
</div>

      <h1>Dashboard</h1>

      {profile && (
        <>
          <h2>
            Welcome {profile.username}
          </h2>

          <p>
            User ID:
            {profile.userId}
          </p>
        </>
      )}

      {account && (
        <>
          <h3>
            Account Details
          </h3>

          <p>
            Account Number:
            {account.account_number}
          </p>

          <p>
            Balance:
            ${account.balance}
          </p>
        </>
      )}

      <h3>
        Recent Transactions
      </h3>

      <table border="1">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(
            (transaction) => (
              <tr
                key={transaction.id}
              >
                <td>
                  {
                    transaction.description
                  }
                </td>

                <td>
                  $
                  {
                    transaction.amount
                  }
                </td>

                <td>
                  {new Date(
                    transaction.created_at
                  ).toLocaleString()}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;